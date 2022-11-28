package shared

// AnalyticsConfigurationType
// <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region. </p> </note>
type AnalyticsConfigurationType struct {
	ApplicationArn *string `json:"ApplicationArn,omitempty"`
	ApplicationID  *string `json:"ApplicationId,omitempty"`
	ExternalID     *string `json:"ExternalId,omitempty"`
	RoleArn        *string `json:"RoleArn,omitempty"`
	UserDataShared *bool   `json:"UserDataShared,omitempty"`
}
