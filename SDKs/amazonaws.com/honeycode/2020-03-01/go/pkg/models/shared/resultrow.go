package shared

type ResultRow struct {
	DataItems []DataItem `json:"dataItems"`
	RowID     *string    `json:"rowId,omitempty"`
}
