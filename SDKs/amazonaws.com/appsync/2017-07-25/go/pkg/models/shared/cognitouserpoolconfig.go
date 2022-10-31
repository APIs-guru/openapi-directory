package shared



type CognitoUserPoolConfig struct {
    AppIDClientRegex *string `json:"appIdClientRegex,omitempty"`
    AwsRegion string `json:"awsRegion"`
    UserPoolID string `json:"userPoolId"`
    
}

