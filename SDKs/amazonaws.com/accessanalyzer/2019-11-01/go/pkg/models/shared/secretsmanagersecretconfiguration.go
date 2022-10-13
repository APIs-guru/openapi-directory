package shared

type SecretsManagerSecretConfiguration struct {
	KmsKeyID     *string `json:"kmsKeyId"`
	SecretPolicy *string `json:"secretPolicy"`
}
