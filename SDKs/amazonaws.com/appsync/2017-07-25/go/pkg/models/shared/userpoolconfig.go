package shared

type UserPoolConfig struct {
	AppIDClientRegex *string           `json:"appIdClientRegex,omitempty"`
	AwsRegion        string            `json:"awsRegion"`
	DefaultAction    DefaultActionEnum `json:"defaultAction"`
	UserPoolID       string            `json:"userPoolId"`
}
