package shared



type CheckSchemaVersionValidityResponse struct {
    Error *string `json:"Error,omitempty"`
    Valid *bool `json:"Valid,omitempty"`
    
}

