package shared

// TargetGroupTuple
// Information about how traffic will be distributed between multiple target groups in a forward rule.
type TargetGroupTuple struct {
	TargetGroupArn *string
	Weight         *int64
}
