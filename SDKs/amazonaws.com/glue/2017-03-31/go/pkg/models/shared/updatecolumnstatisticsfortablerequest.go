package shared

type UpdateColumnStatisticsForTableRequest struct {
	CatalogID            *string            `json:"CatalogId"`
	ColumnStatisticsList []ColumnStatistics `json:"ColumnStatisticsList"`
	DatabaseName         string             `json:"DatabaseName"`
	TableName            string             `json:"TableName"`
}
