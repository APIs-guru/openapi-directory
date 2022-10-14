package shared

type AwsAccessKeysResponseAuthenticationModeEnum string

const (
	AwsAccessKeysResponseAuthenticationModeEnumCredentials AwsAccessKeysResponseAuthenticationModeEnum = "credentials"
)

type AwsAccessKeysResponse struct {
	AccessKeyID        *string                                      `json:"accessKeyId,omitempty"`
	AuthenticationMode *AwsAccessKeysResponseAuthenticationModeEnum `json:"authenticationMode,omitempty"`
}
