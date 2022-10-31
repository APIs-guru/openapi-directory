package shared



type ColumnStatisticsError struct {
    ColumnStatistics *ColumnStatistics `json:"ColumnStatistics,omitempty"`
    Error *ErrorDetail `json:"Error,omitempty"`
    
}

