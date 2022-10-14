package shared

type AnalyticsConfigurationType struct {
	ApplicationArn *string `json:"ApplicationArn,omitempty"`
	ApplicationID  *string `json:"ApplicationId,omitempty"`
	ExternalID     *string `json:"ExternalId,omitempty"`
	RoleArn        *string `json:"RoleArn,omitempty"`
	UserDataShared *bool   `json:"UserDataShared,omitempty"`
}
