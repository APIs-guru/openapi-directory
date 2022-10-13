package shared

type ColumnImportance struct {
	ColumnName *string  `json:"ColumnName"`
	Importance *float64 `json:"Importance"`
}
