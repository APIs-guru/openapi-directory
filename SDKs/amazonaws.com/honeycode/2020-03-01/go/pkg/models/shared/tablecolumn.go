package shared

type TableColumn struct {
	Format          *FormatEnum `json:"format,omitempty"`
	TableColumnID   *string     `json:"tableColumnId,omitempty"`
	TableColumnName *string     `json:"tableColumnName,omitempty"`
}
