package shared

type ApplicationSettingsResponse struct {
	Enabled       *bool   `json:"Enabled"`
	S3BucketName  *string `json:"S3BucketName"`
	SettingsGroup *string `json:"SettingsGroup"`
}
