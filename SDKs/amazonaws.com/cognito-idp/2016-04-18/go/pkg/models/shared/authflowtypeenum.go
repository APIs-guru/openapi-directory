package shared

type AuthFlowTypeEnum string

const (
	AuthFlowTypeEnumUserSrpAuth           AuthFlowTypeEnum = "USER_SRP_AUTH"
	AuthFlowTypeEnumRefreshTokenAuth      AuthFlowTypeEnum = "REFRESH_TOKEN_AUTH"
	AuthFlowTypeEnumRefreshToken          AuthFlowTypeEnum = "REFRESH_TOKEN"
	AuthFlowTypeEnumCustomAuth            AuthFlowTypeEnum = "CUSTOM_AUTH"
	AuthFlowTypeEnumAdminNoSrpAuth        AuthFlowTypeEnum = "ADMIN_NO_SRP_AUTH"
	AuthFlowTypeEnumUserPasswordAuth      AuthFlowTypeEnum = "USER_PASSWORD_AUTH"
	AuthFlowTypeEnumAdminUserPasswordAuth AuthFlowTypeEnum = "ADMIN_USER_PASSWORD_AUTH"
)
