package shared

type CreateRule struct {
	CronExpression *string                 `json:"CronExpression"`
	Interval       *int64                  `json:"Interval"`
	IntervalUnit   *IntervalUnitValuesEnum `json:"IntervalUnit"`
	Location       *LocationValuesEnum     `json:"Location"`
	Times          []string                `json:"Times"`
}
