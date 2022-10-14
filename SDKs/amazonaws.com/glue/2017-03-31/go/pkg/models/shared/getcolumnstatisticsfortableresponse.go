package shared

type GetColumnStatisticsForTableResponse struct {
	ColumnStatisticsList []ColumnStatistics `json:"ColumnStatisticsList,omitempty"`
	Errors               []ColumnError      `json:"Errors,omitempty"`
}
