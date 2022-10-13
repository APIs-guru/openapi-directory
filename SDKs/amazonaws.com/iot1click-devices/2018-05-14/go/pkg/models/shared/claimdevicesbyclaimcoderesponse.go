package shared

type ClaimDevicesByClaimCodeResponse struct {
	ClaimCode *string `json:"ClaimCode"`
	Total     *int64  `json:"Total"`
}
