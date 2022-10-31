package shared



type DeliveryStreamEncryptionConfigurationInput struct {
    KeyArn *string `json:"KeyARN,omitempty"`
    KeyType KeyTypeEnum `json:"KeyType"`
    
}

