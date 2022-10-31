package shared

type SdkType struct {
	ConfigurationProperties []SdkConfigurationProperty `json:"configurationProperties,omitempty"`
	Description             *string                    `json:"description,omitempty"`
	FriendlyName            *string                    `json:"friendlyName,omitempty"`
	ID                      *string                    `json:"id,omitempty"`
}
