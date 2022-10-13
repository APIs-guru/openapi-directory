package shared

type CognitoUserPoolConfig struct {
	AppIDClientRegex *string `json:"appIdClientRegex"`
	AwsRegion        string  `json:"awsRegion"`
	UserPoolID       string  `json:"userPoolId"`
}
