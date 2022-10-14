package shared

type TableVersion struct {
	Table     *Table  `json:"Table,omitempty"`
	VersionID *string `json:"VersionId,omitempty"`
}
