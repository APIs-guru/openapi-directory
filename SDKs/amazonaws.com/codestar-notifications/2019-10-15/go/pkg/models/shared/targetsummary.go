package shared

type TargetSummary struct {
	TargetAddress *string           `json:"TargetAddress"`
	TargetStatus  *TargetStatusEnum `json:"TargetStatus"`
	TargetType    *string           `json:"TargetType"`
}
