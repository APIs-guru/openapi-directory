package shared

type ResultConfiguration struct {
	EncryptionConfiguration *EncryptionConfiguration `json:"EncryptionConfiguration"`
	OutputLocation          *string                  `json:"OutputLocation"`
}
