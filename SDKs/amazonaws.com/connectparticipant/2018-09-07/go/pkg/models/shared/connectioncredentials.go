package shared

type ConnectionCredentials struct {
	ConnectionToken *string `json:"ConnectionToken"`
	Expiry          *string `json:"Expiry"`
}
