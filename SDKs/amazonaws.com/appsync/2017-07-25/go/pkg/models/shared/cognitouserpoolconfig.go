package shared

// CognitoUserPoolConfig
// Describes an Amazon Cognito user pool configuration.
type CognitoUserPoolConfig struct {
	AppIDClientRegex *string `json:"appIdClientRegex,omitempty"`
	AwsRegion        string  `json:"awsRegion"`
	UserPoolID       string  `json:"userPoolId"`
}
