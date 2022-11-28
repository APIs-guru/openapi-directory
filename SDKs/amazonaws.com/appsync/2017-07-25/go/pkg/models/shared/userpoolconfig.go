package shared

// UserPoolConfig
// Describes an Amazon Cognito user pool configuration.
type UserPoolConfig struct {
	AppIDClientRegex *string           `json:"appIdClientRegex,omitempty"`
	AwsRegion        string            `json:"awsRegion"`
	DefaultAction    DefaultActionEnum `json:"defaultAction"`
	UserPoolID       string            `json:"userPoolId"`
}
