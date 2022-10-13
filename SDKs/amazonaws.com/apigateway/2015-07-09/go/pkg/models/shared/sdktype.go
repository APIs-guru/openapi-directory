package shared

type SdkType struct {
	ConfigurationProperties []SdkConfigurationProperty `json:"configurationProperties"`
	Description             *string                    `json:"description"`
	FriendlyName            *string                    `json:"friendlyName"`
	ID                      *string                    `json:"id"`
}
