package shared

type ActionTypeEnumEnum string

const (
	ActionTypeEnumEnumForward             ActionTypeEnumEnum = "forward"
	ActionTypeEnumEnumAuthenticateOidc    ActionTypeEnumEnum = "authenticate-oidc"
	ActionTypeEnumEnumAuthenticateCognito ActionTypeEnumEnum = "authenticate-cognito"
	ActionTypeEnumEnumRedirect            ActionTypeEnumEnum = "redirect"
	ActionTypeEnumEnumFixedResponse       ActionTypeEnumEnum = "fixed-response"
)
