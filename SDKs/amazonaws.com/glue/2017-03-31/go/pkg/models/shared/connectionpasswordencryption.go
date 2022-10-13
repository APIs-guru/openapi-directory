package shared

type ConnectionPasswordEncryption struct {
	AwsKmsKeyID                       *string `json:"AwsKmsKeyId"`
	ReturnConnectionPasswordEncrypted bool    `json:"ReturnConnectionPasswordEncrypted"`
}
