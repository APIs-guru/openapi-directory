package shared

// TargetGroupStickinessConfig
// Information about the target group stickiness for a rule.
type TargetGroupStickinessConfig struct {
	DurationSeconds *int64
	Enabled         *bool
}
