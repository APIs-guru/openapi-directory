package shared

type UpdateColumnStatisticsForPartitionRequest struct {
	CatalogID            *string            `json:"CatalogId,omitempty"`
	ColumnStatisticsList []ColumnStatistics `json:"ColumnStatisticsList"`
	DatabaseName         string             `json:"DatabaseName"`
	PartitionValues      []string           `json:"PartitionValues"`
	TableName            string             `json:"TableName"`
}
