package shared

type AwsCredentials struct {
	AccessKeyID     *string `json:"AccessKeyId"`
	SecretAccessKey *string `json:"SecretAccessKey"`
	SessionToken    *string `json:"SessionToken"`
}
