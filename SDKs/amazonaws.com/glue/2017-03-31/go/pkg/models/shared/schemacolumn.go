package shared

// SchemaColumn
// A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.
type SchemaColumn struct {
	DataType *string `json:"DataType,omitempty"`
	Name     *string `json:"Name,omitempty"`
}
