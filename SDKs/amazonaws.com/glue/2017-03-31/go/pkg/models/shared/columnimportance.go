package shared

// ColumnImportance
// <p>A structure containing the column name and column importance score for a column. </p> <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
type ColumnImportance struct {
	ColumnName *string  `json:"ColumnName,omitempty"`
	Importance *float64 `json:"Importance,omitempty"`
}
