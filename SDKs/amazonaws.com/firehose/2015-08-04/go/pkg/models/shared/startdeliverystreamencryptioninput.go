package shared

type StartDeliveryStreamEncryptionInput struct {
	DeliveryStreamEncryptionConfigurationInput *DeliveryStreamEncryptionConfigurationInput `json:"DeliveryStreamEncryptionConfigurationInput"`
	DeliveryStreamName                         string                                      `json:"DeliveryStreamName"`
}
