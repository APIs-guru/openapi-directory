package shared

type DeliveryStreamEncryptionConfigurationInput struct {
	KeyArn  *string     `json:"KeyARN"`
	KeyType KeyTypeEnum `json:"KeyType"`
}
