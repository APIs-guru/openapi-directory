package shared

type ModeEnum string

const (
	ModeEnumAPIKey                 ModeEnum = "API_KEY"
	ModeEnumAwsIam                 ModeEnum = "AWS_IAM"
	ModeEnumAmazonCognitoUserPools ModeEnum = "AMAZON_COGNITO_USER_POOLS"
	ModeEnumOpenidConnect          ModeEnum = "OPENID_CONNECT"
)
