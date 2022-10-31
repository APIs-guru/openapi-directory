package shared



type SchemaVersionErrorItem struct {
    ErrorDetails *ErrorDetails `json:"ErrorDetails,omitempty"`
    VersionNumber *int64 `json:"VersionNumber,omitempty"`
    
}

