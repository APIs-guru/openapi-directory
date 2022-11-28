package shared

// TableColumn
// An object that contains attributes about a single column in a table
type TableColumn struct {
	Format          *FormatEnum `json:"format,omitempty"`
	TableColumnID   *string     `json:"tableColumnId,omitempty"`
	TableColumnName *string     `json:"tableColumnName,omitempty"`
}
