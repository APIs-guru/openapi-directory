package shared

// Cell
// An object that represents a single cell in a table.
type Cell struct {
	Format         *FormatEnum `json:"format,omitempty"`
	FormattedValue *string     `json:"formattedValue,omitempty"`
	Formula        *string     `json:"formula,omitempty"`
	RawValue       *string     `json:"rawValue,omitempty"`
}
