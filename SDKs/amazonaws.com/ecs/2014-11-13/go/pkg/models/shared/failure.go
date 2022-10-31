package shared

type Failure struct {
	Arn    *string `json:"arn,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Reason *string `json:"reason,omitempty"`
}
