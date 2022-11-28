package shared

// TargetSummary
// Information about the targets specified for a notification rule.
type TargetSummary struct {
	TargetAddress *string           `json:"TargetAddress,omitempty"`
	TargetStatus  *TargetStatusEnum `json:"TargetStatus,omitempty"`
	TargetType    *string           `json:"TargetType,omitempty"`
}
