package shared

type SsoIdentity struct {
	IdentityStoreID string  `json:"identityStoreId"`
	UserID          *string `json:"userId"`
}
