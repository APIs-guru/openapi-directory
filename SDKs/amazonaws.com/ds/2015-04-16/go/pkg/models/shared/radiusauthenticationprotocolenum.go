package shared

type RadiusAuthenticationProtocolEnum string

const (
	RadiusAuthenticationProtocolEnumPap      RadiusAuthenticationProtocolEnum = "PAP"
	RadiusAuthenticationProtocolEnumChap     RadiusAuthenticationProtocolEnum = "CHAP"
	RadiusAuthenticationProtocolEnumMsChaPv1 RadiusAuthenticationProtocolEnum = "MS-CHAPv1"
	RadiusAuthenticationProtocolEnumMsChaPv2 RadiusAuthenticationProtocolEnum = "MS-CHAPv2"
)
