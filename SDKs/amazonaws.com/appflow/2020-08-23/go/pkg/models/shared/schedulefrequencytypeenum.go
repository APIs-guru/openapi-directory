package shared

type ScheduleFrequencyTypeEnum string

const (
	ScheduleFrequencyTypeEnumByminute ScheduleFrequencyTypeEnum = "BYMINUTE"
	ScheduleFrequencyTypeEnumHourly   ScheduleFrequencyTypeEnum = "HOURLY"
	ScheduleFrequencyTypeEnumDaily    ScheduleFrequencyTypeEnum = "DAILY"
	ScheduleFrequencyTypeEnumWeekly   ScheduleFrequencyTypeEnum = "WEEKLY"
	ScheduleFrequencyTypeEnumMonthly  ScheduleFrequencyTypeEnum = "MONTHLY"
	ScheduleFrequencyTypeEnumOnce     ScheduleFrequencyTypeEnum = "ONCE"
)
