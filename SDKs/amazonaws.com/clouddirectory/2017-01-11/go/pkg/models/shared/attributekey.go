package shared

// AttributeKey
// A unique identifier for an attribute.
type AttributeKey struct {
	FacetName string `json:"FacetName"`
	Name      string `json:"Name"`
	SchemaArn string `json:"SchemaArn"`
}
