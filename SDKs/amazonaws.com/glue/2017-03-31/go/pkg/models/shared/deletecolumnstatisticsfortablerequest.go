package shared

type DeleteColumnStatisticsForTableRequest struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	ColumnName   string  `json:"ColumnName"`
	DatabaseName string  `json:"DatabaseName"`
	TableName    string  `json:"TableName"`
}
