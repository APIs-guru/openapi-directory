package shared

type DeleteColumnStatisticsForPartitionRequest struct {
	CatalogID       *string  `json:"CatalogId"`
	ColumnName      string   `json:"ColumnName"`
	DatabaseName    string   `json:"DatabaseName"`
	PartitionValues []string `json:"PartitionValues"`
	TableName       string   `json:"TableName"`
}
