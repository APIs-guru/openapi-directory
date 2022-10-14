package shared

type ApplicationSettingsResponse struct {
	Enabled       *bool   `json:"Enabled,omitempty"`
	S3BucketName  *string `json:"S3BucketName,omitempty"`
	SettingsGroup *string `json:"SettingsGroup,omitempty"`
}
