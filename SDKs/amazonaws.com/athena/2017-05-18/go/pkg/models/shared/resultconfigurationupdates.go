package shared

// ResultConfigurationUpdates
// The information about the updates in the query results, such as output location and encryption configuration for the query results.
type ResultConfigurationUpdates struct {
	EncryptionConfiguration       *EncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
	OutputLocation                *string                  `json:"OutputLocation,omitempty"`
	RemoveEncryptionConfiguration *bool                    `json:"RemoveEncryptionConfiguration,omitempty"`
	RemoveOutputLocation          *bool                    `json:"RemoveOutputLocation,omitempty"`
}
