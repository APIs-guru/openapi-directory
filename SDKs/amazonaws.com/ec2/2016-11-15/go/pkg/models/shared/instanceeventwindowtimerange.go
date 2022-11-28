package shared

// InstanceEventWindowTimeRange
// The start day and time and the end day and time of the time range, in UTC.
type InstanceEventWindowTimeRange struct {
	EndHour      *int64
	EndWeekDay   *WeekDayEnum
	StartHour    *int64
	StartWeekDay *WeekDayEnum
}
