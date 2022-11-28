package shared

// ColumnStatisticsError
// Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.
type ColumnStatisticsError struct {
	ColumnStatistics *ColumnStatistics `json:"ColumnStatistics,omitempty"`
	Error            *ErrorDetail      `json:"Error,omitempty"`
}
