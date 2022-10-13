package shared

type GetMinuteUsageResponse struct {
	EstimatedMinutesRemaining     *int64 `json:"estimatedMinutesRemaining"`
	IsReservedMinutesCustomer     *bool  `json:"isReservedMinutesCustomer"`
	TotalReservedMinuteAllocation *int64 `json:"totalReservedMinuteAllocation"`
	TotalScheduledMinutes         *int64 `json:"totalScheduledMinutes"`
	UpcomingMinutesScheduled      *int64 `json:"upcomingMinutesScheduled"`
}
