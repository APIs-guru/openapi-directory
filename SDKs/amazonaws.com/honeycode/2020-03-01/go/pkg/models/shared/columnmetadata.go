package shared

// ColumnMetadata
// Metadata for column in the table.
type ColumnMetadata struct {
	Format FormatEnum `json:"format"`
	Name   string     `json:"name"`
}
