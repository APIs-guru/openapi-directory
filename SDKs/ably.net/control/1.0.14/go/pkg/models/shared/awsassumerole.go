package shared

type AwsAssumeRoleAuthenticationModeEnum string

const (
	AwsAssumeRoleAuthenticationModeEnumAssumeRole AwsAssumeRoleAuthenticationModeEnum = "assumeRole"
)

type AwsAssumeRole struct {
	AssumeRoleArn      string                               `json:"assumeRoleArn"`
	AuthenticationMode *AwsAssumeRoleAuthenticationModeEnum `json:"authenticationMode,omitempty"`
}
