package shared

type ResultConfigurationUpdates struct {
	EncryptionConfiguration       *EncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
	OutputLocation                *string                  `json:"OutputLocation,omitempty"`
	RemoveEncryptionConfiguration *bool                    `json:"RemoveEncryptionConfiguration,omitempty"`
	RemoveOutputLocation          *bool                    `json:"RemoveOutputLocation,omitempty"`
}
