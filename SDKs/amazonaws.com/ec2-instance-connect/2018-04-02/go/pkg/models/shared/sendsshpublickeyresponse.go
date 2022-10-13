package shared

type SendSSHPublicKeyResponse struct {
	RequestID *string `json:"RequestId"`
	Success   *bool   `json:"Success"`
}
