package shared

type DeliveryStreamEncryptionConfiguration struct {
	FailureDescription *FailureDescription                 `json:"FailureDescription"`
	KeyArn             *string                             `json:"KeyARN"`
	KeyType            *KeyTypeEnum                        `json:"KeyType"`
	Status             *DeliveryStreamEncryptionStatusEnum `json:"Status"`
}
