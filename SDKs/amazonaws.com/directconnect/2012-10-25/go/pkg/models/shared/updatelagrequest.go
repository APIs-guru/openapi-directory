package shared

type UpdateLagRequest struct {
	EncryptionMode *string `json:"encryptionMode"`
	LagID          string  `json:"lagId"`
	LagName        *string `json:"lagName"`
	MinimumLinks   *int64  `json:"minimumLinks"`
}
