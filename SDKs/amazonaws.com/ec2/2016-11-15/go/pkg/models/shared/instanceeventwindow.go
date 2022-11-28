package shared

// InstanceEventWindow
// The event window.
type InstanceEventWindow struct {
	AssociationTarget     *InstanceEventWindowAssociationTarget
	CronExpression        *string
	InstanceEventWindowID *string
	Name                  *string
	State                 *InstanceEventWindowStateEnum
	Tags                  []Tag
	TimeRanges            []InstanceEventWindowTimeRange
}
