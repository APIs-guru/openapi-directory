package shared

type FailureDescription struct {
	Details string                        `json:"Details"`
	Type    DeliveryStreamFailureTypeEnum `json:"Type"`
}
