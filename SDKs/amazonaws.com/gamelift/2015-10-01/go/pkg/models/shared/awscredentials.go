package shared

type AwsCredentials struct {
	AccessKeyID     *string `json:"AccessKeyId,omitempty"`
	SecretAccessKey *string `json:"SecretAccessKey,omitempty"`
	SessionToken    *string `json:"SessionToken,omitempty"`
}
