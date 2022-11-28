package shared

type ConnectionScheduleTimeUnitEnum string

const (
	ConnectionScheduleTimeUnitEnumMinutes ConnectionScheduleTimeUnitEnum = "minutes"
	ConnectionScheduleTimeUnitEnumHours   ConnectionScheduleTimeUnitEnum = "hours"
	ConnectionScheduleTimeUnitEnumDays    ConnectionScheduleTimeUnitEnum = "days"
	ConnectionScheduleTimeUnitEnumWeeks   ConnectionScheduleTimeUnitEnum = "weeks"
	ConnectionScheduleTimeUnitEnumMonths  ConnectionScheduleTimeUnitEnum = "months"
)

// ConnectionSchedule
// if null, then no schedule is set.
type ConnectionSchedule struct {
	TimeUnit ConnectionScheduleTimeUnitEnum `json:"timeUnit"`
	Units    int64                          `json:"units"`
}
