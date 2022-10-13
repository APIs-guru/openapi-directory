package shared

type Filter struct {
	ContextRowID *string `json:"contextRowId"`
	Formula      string  `json:"formula"`
}
