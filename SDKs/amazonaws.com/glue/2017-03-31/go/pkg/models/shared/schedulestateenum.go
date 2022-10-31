package shared

type ScheduleStateEnum string

const (
	ScheduleStateEnumScheduled     ScheduleStateEnum = "SCHEDULED"
	ScheduleStateEnumNotScheduled  ScheduleStateEnum = "NOT_SCHEDULED"
	ScheduleStateEnumTransitioning ScheduleStateEnum = "TRANSITIONING"
)
