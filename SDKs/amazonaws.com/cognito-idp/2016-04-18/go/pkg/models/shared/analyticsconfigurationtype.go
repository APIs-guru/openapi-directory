package shared

type AnalyticsConfigurationType struct {
	ApplicationArn *string `json:"ApplicationArn"`
	ApplicationID  *string `json:"ApplicationId"`
	ExternalID     *string `json:"ExternalId"`
	RoleArn        *string `json:"RoleArn"`
	UserDataShared *bool   `json:"UserDataShared"`
}
