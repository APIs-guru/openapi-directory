package shared

type SdkConfigurationProperty struct {
	DefaultValue *string `json:"defaultValue,omitempty"`
	Description  *string `json:"description,omitempty"`
	FriendlyName *string `json:"friendlyName,omitempty"`
	Name         *string `json:"name,omitempty"`
	Required     *bool   `json:"required,omitempty"`
}
