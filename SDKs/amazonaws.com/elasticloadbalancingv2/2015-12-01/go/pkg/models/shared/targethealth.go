package shared

// TargetHealth
// Information about the current health of a target.
type TargetHealth struct {
	Description *string
	Reason      *TargetHealthReasonEnumEnum
	State       *TargetHealthStateEnumEnum
}
