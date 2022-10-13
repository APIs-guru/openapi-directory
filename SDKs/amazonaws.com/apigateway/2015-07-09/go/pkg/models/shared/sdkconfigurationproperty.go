package shared

type SdkConfigurationProperty struct {
	DefaultValue *string `json:"defaultValue"`
	Description  *string `json:"description"`
	FriendlyName *string `json:"friendlyName"`
	Name         *string `json:"name"`
	Required     *bool   `json:"required"`
}
