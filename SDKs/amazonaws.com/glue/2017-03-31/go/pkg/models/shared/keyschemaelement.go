package shared

// KeySchemaElement
// A partition key pair consisting of a name and a type.
type KeySchemaElement struct {
	Name string `json:"Name"`
	Type string `json:"Type"`
}
