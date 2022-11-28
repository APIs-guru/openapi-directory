package shared

// ScheduledInstanceRecurrence
// Describes the recurring schedule for a Scheduled Instance.
type ScheduledInstanceRecurrence struct {
	Frequency               *string
	Interval                *int64
	OccurrenceDaySet        []int64
	OccurrenceRelativeToEnd *bool
	OccurrenceUnit          *string
}
