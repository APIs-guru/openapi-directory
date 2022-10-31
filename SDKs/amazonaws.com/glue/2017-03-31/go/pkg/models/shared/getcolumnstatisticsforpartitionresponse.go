package shared

type GetColumnStatisticsForPartitionResponse struct {
	ColumnStatisticsList []ColumnStatistics `json:"ColumnStatisticsList,omitempty"`
	Errors               []ColumnError      `json:"Errors,omitempty"`
}
