package shared

type DeleteColumnStatisticsForTableRequest struct {
	CatalogID    *string `json:"CatalogId"`
	ColumnName   string  `json:"ColumnName"`
	DatabaseName string  `json:"DatabaseName"`
	TableName    string  `json:"TableName"`
}
