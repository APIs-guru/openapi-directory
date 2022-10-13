package shared

type GetColumnStatisticsForTableResponse struct {
	ColumnStatisticsList []ColumnStatistics `json:"ColumnStatisticsList"`
	Errors               []ColumnError      `json:"Errors"`
}
