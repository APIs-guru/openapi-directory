package shared

// Table
// An object representing the properties of a table in a workbook.
type Table struct {
	TableID   *string `json:"tableId,omitempty"`
	TableName *string `json:"tableName,omitempty"`
}
