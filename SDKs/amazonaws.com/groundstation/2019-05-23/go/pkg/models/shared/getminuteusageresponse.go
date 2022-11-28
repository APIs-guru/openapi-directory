package shared

// GetMinuteUsageResponse
// <p/>
type GetMinuteUsageResponse struct {
	EstimatedMinutesRemaining     *int64 `json:"estimatedMinutesRemaining,omitempty"`
	IsReservedMinutesCustomer     *bool  `json:"isReservedMinutesCustomer,omitempty"`
	TotalReservedMinuteAllocation *int64 `json:"totalReservedMinuteAllocation,omitempty"`
	TotalScheduledMinutes         *int64 `json:"totalScheduledMinutes,omitempty"`
	UpcomingMinutesScheduled      *int64 `json:"upcomingMinutesScheduled,omitempty"`
}
