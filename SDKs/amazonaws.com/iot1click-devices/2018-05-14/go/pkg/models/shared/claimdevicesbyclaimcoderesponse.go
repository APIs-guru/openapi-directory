package shared



type ClaimDevicesByClaimCodeResponse struct {
    ClaimCode *string `json:"ClaimCode,omitempty"`
    Total *int64 `json:"Total,omitempty"`
    
}

