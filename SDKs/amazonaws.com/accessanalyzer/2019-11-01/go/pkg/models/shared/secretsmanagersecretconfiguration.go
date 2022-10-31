package shared

type SecretsManagerSecretConfiguration struct {
	KmsKeyID     *string `json:"kmsKeyId,omitempty"`
	SecretPolicy *string `json:"secretPolicy,omitempty"`
}
