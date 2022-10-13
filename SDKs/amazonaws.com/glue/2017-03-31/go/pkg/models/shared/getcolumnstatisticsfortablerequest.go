package shared

type GetColumnStatisticsForTableRequest struct {
	CatalogID    *string  `json:"CatalogId"`
	ColumnNames  []string `json:"ColumnNames"`
	DatabaseName string   `json:"DatabaseName"`
	TableName    string   `json:"TableName"`
}
