package shared

// DocumentServiceWarning
// A warning returned by the document service when an issue is discovered while processing an upload request.
type DocumentServiceWarning struct {
	Message *string `json:"message,omitempty"`
}
