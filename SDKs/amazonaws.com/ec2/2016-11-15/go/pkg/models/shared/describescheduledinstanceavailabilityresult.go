package shared

// DescribeScheduledInstanceAvailabilityResult
// Contains the output of DescribeScheduledInstanceAvailability.
type DescribeScheduledInstanceAvailabilityResult struct {
	NextToken                        *string
	ScheduledInstanceAvailabilitySet []ScheduledInstanceAvailability
}
