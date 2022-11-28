package shared

// DeliveryStreamEncryptionConfigurationInput
// Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
type DeliveryStreamEncryptionConfigurationInput struct {
	KeyArn  *string     `json:"KeyARN,omitempty"`
	KeyType KeyTypeEnum `json:"KeyType"`
}
