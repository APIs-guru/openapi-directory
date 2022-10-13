package shared

type Selector struct {
	FieldName *string   `json:"fieldName"`
	Operator  *Operator `json:"operator"`
}
