package shared

type Failure struct {
	Arn    *string `json:"arn"`
	Detail *string `json:"detail"`
	Reason *string `json:"reason"`
}
