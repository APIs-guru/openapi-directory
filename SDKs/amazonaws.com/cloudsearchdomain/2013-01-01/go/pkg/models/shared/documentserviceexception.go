package shared

type DocumentServiceException struct {
	Message *string `json:"message,omitempty"`
	Status  *string `json:"status,omitempty"`
}
