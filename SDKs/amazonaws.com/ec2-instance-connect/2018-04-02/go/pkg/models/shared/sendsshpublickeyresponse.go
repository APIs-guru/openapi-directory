package shared

type SendSSHPublicKeyResponse struct {
	RequestID *string `json:"RequestId,omitempty"`
	Success   *bool   `json:"Success,omitempty"`
}
