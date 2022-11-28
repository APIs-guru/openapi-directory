package shared

// ScalingTrigger
// The conditions that trigger an automatic scaling activity.
type ScalingTrigger struct {
	CloudWatchAlarmDefinition CloudWatchAlarmDefinition `json:"CloudWatchAlarmDefinition"`
}
