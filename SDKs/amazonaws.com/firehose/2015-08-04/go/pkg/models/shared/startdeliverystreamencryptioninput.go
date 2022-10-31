package shared

type StartDeliveryStreamEncryptionInput struct {
	DeliveryStreamEncryptionConfigurationInput *DeliveryStreamEncryptionConfigurationInput `json:"DeliveryStreamEncryptionConfigurationInput,omitempty"`
	DeliveryStreamName                         string                                      `json:"DeliveryStreamName"`
}
