package shared

type AuthorizerTypeEnum string

const (
	AuthorizerTypeEnumToken            AuthorizerTypeEnum = "TOKEN"
	AuthorizerTypeEnumRequest          AuthorizerTypeEnum = "REQUEST"
	AuthorizerTypeEnumCognitoUserPools AuthorizerTypeEnum = "COGNITO_USER_POOLS"
)
