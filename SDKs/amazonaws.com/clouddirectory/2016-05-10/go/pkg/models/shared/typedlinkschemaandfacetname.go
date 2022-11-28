package shared

// TypedLinkSchemaAndFacetName
// Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
type TypedLinkSchemaAndFacetName struct {
	SchemaArn     string `json:"SchemaArn"`
	TypedLinkName string `json:"TypedLinkName"`
}
