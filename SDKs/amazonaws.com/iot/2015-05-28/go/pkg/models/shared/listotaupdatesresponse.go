package shared



type ListOtaUpdatesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    OtaUpdates []OtaUpdateSummary `json:"otaUpdates,omitempty"`
    
}

