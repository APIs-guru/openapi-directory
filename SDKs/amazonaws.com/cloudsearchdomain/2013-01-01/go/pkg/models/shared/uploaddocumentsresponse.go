package shared



type UploadDocumentsResponse struct {
    Adds *int64 `json:"adds,omitempty"`
    Deletes *int64 `json:"deletes,omitempty"`
    Status *string `json:"status,omitempty"`
    Warnings []DocumentServiceWarning `json:"warnings,omitempty"`
    
}

