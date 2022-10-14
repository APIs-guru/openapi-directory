package shared

type ResultConfiguration struct {
	EncryptionConfiguration *EncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
	OutputLocation          *string                  `json:"OutputLocation,omitempty"`
}
