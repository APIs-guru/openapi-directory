package shared

type TableVersion struct {
	Table     *Table  `json:"Table"`
	VersionID *string `json:"VersionId"`
}
