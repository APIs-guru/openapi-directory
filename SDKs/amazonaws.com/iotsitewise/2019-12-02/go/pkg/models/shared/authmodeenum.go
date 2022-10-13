package shared

type AuthModeEnum string

const (
	AuthModeEnumIam AuthModeEnum = "IAM"
	AuthModeEnumSso AuthModeEnum = "SSO"
)
