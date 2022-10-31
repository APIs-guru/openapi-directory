package shared



type TableVersionError struct {
    ErrorDetail *ErrorDetail `json:"ErrorDetail,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    VersionID *string `json:"VersionId,omitempty"`
    
}

