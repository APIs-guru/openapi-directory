package shared

type TargetSummary struct {
	TargetAddress *string           `json:"TargetAddress,omitempty"`
	TargetStatus  *TargetStatusEnum `json:"TargetStatus,omitempty"`
	TargetType    *string           `json:"TargetType,omitempty"`
}
