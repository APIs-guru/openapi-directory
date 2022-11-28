package shared

// CreateRule
// <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
type CreateRule struct {
	CronExpression *string                 `json:"CronExpression,omitempty"`
	Interval       *int64                  `json:"Interval,omitempty"`
	IntervalUnit   *IntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
	Location       *LocationValuesEnum     `json:"Location,omitempty"`
	Times          []string                `json:"Times,omitempty"`
}
