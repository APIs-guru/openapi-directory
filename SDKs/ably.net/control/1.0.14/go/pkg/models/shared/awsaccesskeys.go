package shared

type AwsAccessKeysAuthenticationModeEnum string

const (
	AwsAccessKeysAuthenticationModeEnumCredentials AwsAccessKeysAuthenticationModeEnum = "credentials"
)

type AwsAccessKeys struct {
	AccessKeyID        string                               `json:"accessKeyId"`
	AuthenticationMode *AwsAccessKeysAuthenticationModeEnum `json:"authenticationMode"`
	SecretAccessKey    string                               `json:"secretAccessKey"`
}
