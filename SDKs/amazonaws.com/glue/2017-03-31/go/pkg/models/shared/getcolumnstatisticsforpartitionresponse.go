package shared

type GetColumnStatisticsForPartitionResponse struct {
	ColumnStatisticsList []ColumnStatistics `json:"ColumnStatisticsList"`
	Errors               []ColumnError      `json:"Errors"`
}
