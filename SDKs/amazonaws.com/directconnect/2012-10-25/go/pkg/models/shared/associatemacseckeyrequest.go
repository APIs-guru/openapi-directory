package shared

type AssociateMacSecKeyRequest struct {
	Cak          *string `json:"cak"`
	Ckn          *string `json:"ckn"`
	ConnectionID string  `json:"connectionId"`
	SecretArn    *string `json:"secretARN"`
}
