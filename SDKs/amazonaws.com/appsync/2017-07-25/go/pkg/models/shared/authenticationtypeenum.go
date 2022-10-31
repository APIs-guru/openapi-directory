package shared




type AuthenticationTypeEnum string

const (
    AuthenticationTypeEnumAPIKey AuthenticationTypeEnum = "API_KEY"
AuthenticationTypeEnumAwsIam AuthenticationTypeEnum = "AWS_IAM"
AuthenticationTypeEnumAmazonCognitoUserPools AuthenticationTypeEnum = "AMAZON_COGNITO_USER_POOLS"
AuthenticationTypeEnumOpenidConnect AuthenticationTypeEnum = "OPENID_CONNECT"
AuthenticationTypeEnumAwsLambda AuthenticationTypeEnum = "AWS_LAMBDA"
)


