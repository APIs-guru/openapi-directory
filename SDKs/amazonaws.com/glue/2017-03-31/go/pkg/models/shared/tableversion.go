package shared

// TableVersion
// Specifies a version of a table.
type TableVersion struct {
	Table     *Table  `json:"Table,omitempty"`
	VersionID *string `json:"VersionId,omitempty"`
}
