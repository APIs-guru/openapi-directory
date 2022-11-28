package shared

// DocumentServiceException
// Information about any problems encountered while processing an upload request.
type DocumentServiceException struct {
	Message *string `json:"message,omitempty"`
	Status  *string `json:"status,omitempty"`
}
