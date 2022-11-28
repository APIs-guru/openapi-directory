package shared

// SchemaDefinition
// Information needed to define a schema.
type SchemaDefinition struct {
	Columns []Column `json:"columns,omitempty"`
}
