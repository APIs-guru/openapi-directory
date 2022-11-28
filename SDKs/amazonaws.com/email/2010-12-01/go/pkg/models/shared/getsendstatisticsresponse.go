package shared

// GetSendStatisticsResponse
// Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
type GetSendStatisticsResponse struct {
	SendDataPoints []SendDataPoint
}
