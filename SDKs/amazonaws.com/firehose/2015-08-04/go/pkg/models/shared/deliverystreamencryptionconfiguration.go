package shared

// DeliveryStreamEncryptionConfiguration
// Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation.
type DeliveryStreamEncryptionConfiguration struct {
	FailureDescription *FailureDescription                 `json:"FailureDescription,omitempty"`
	KeyArn             *string                             `json:"KeyARN,omitempty"`
	KeyType            *KeyTypeEnum                        `json:"KeyType,omitempty"`
	Status             *DeliveryStreamEncryptionStatusEnum `json:"Status,omitempty"`
}
