package shared

type TableColumn struct {
	Format          *FormatEnum `json:"format"`
	TableColumnID   *string     `json:"tableColumnId"`
	TableColumnName *string     `json:"tableColumnName"`
}
