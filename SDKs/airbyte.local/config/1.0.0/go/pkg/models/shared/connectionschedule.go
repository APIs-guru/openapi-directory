package shared

type ConnectionScheduleTimeUnitEnum string

const (
	ConnectionScheduleTimeUnitEnumMinutes ConnectionScheduleTimeUnitEnum = "minutes"
	ConnectionScheduleTimeUnitEnumHours   ConnectionScheduleTimeUnitEnum = "hours"
	ConnectionScheduleTimeUnitEnumDays    ConnectionScheduleTimeUnitEnum = "days"
	ConnectionScheduleTimeUnitEnumWeeks   ConnectionScheduleTimeUnitEnum = "weeks"
	ConnectionScheduleTimeUnitEnumMonths  ConnectionScheduleTimeUnitEnum = "months"
)

type ConnectionSchedule struct {
	TimeUnit ConnectionScheduleTimeUnitEnum `json:"timeUnit"`
	Units    int64                          `json:"units"`
}
