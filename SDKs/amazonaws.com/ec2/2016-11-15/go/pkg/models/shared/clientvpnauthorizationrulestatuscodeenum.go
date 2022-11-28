package shared

type ClientVpnAuthorizationRuleStatusCodeEnum string

const (
	ClientVpnAuthorizationRuleStatusCodeEnumAuthorizing ClientVpnAuthorizationRuleStatusCodeEnum = "authorizing"
	ClientVpnAuthorizationRuleStatusCodeEnumActive      ClientVpnAuthorizationRuleStatusCodeEnum = "active"
	ClientVpnAuthorizationRuleStatusCodeEnumFailed      ClientVpnAuthorizationRuleStatusCodeEnum = "failed"
	ClientVpnAuthorizationRuleStatusCodeEnumRevoking    ClientVpnAuthorizationRuleStatusCodeEnum = "revoking"
)
