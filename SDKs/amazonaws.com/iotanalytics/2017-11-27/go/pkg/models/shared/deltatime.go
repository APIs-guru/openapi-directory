package shared

type DeltaTime struct {
	OffsetSeconds  int64  `json:"offsetSeconds"`
	TimeExpression string `json:"timeExpression"`
}
