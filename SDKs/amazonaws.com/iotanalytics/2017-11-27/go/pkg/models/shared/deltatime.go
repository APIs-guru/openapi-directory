package shared

// DeltaTime
// Used to limit data to that which has arrived since the last execution of the action.
type DeltaTime struct {
	OffsetSeconds  int64  `json:"offsetSeconds"`
	TimeExpression string `json:"timeExpression"`
}
