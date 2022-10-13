package shared

type ColumnStatisticsError struct {
	ColumnStatistics *ColumnStatistics `json:"ColumnStatistics"`
	Error            *ErrorDetail      `json:"Error"`
}
