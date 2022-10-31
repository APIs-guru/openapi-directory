package shared



type DeliveryStreamEncryptionConfiguration struct {
    FailureDescription *FailureDescription `json:"FailureDescription,omitempty"`
    KeyArn *string `json:"KeyARN,omitempty"`
    KeyType *KeyTypeEnum `json:"KeyType,omitempty"`
    Status *DeliveryStreamEncryptionStatusEnum `json:"Status,omitempty"`
    
}

