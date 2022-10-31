package shared

type AuthenticationTypeEnum string

const (
	AuthenticationTypeEnumAPI      AuthenticationTypeEnum = "API"
	AuthenticationTypeEnumSaml     AuthenticationTypeEnum = "SAML"
	AuthenticationTypeEnumUserpool AuthenticationTypeEnum = "USERPOOL"
)
