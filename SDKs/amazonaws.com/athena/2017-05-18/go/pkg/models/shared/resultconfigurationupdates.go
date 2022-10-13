package shared

type ResultConfigurationUpdates struct {
	EncryptionConfiguration       *EncryptionConfiguration `json:"EncryptionConfiguration"`
	OutputLocation                *string                  `json:"OutputLocation"`
	RemoveEncryptionConfiguration *bool                    `json:"RemoveEncryptionConfiguration"`
	RemoveOutputLocation          *bool                    `json:"RemoveOutputLocation"`
}
