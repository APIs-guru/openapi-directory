package shared

// FailureDescription
// Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.
type FailureDescription struct {
	Details string                        `json:"Details"`
	Type    DeliveryStreamFailureTypeEnum `json:"Type"`
}
