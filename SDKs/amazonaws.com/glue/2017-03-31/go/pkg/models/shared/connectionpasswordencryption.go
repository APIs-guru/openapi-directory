package shared

type ConnectionPasswordEncryption struct {
	AwsKmsKeyID                       *string `json:"AwsKmsKeyId,omitempty"`
	ReturnConnectionPasswordEncrypted bool    `json:"ReturnConnectionPasswordEncrypted"`
}
