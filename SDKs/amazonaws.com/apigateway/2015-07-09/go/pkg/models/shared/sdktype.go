package shared

// SDKType
// A type of SDK that API Gateway can generate.
type SDKType struct {
	ConfigurationProperties []SDKConfigurationProperty `json:"configurationProperties,omitempty"`
	Description             *string                    `json:"description,omitempty"`
	FriendlyName            *string                    `json:"friendlyName,omitempty"`
	ID                      *string                    `json:"id,omitempty"`
}
