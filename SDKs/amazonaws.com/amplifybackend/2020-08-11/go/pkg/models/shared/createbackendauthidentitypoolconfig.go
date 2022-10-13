package shared

type CreateBackendAuthIdentityPoolConfig struct {
	IdentityPoolName     string `json:"IdentityPoolName"`
	UnauthenticatedLogin bool   `json:"UnauthenticatedLogin"`
}
