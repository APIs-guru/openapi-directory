package shared

// ForwardActionConfig
// Information about a forward action.
type ForwardActionConfig struct {
	TargetGroupStickinessConfig *TargetGroupStickinessConfig
	TargetGroups                []TargetGroupTuple
}
