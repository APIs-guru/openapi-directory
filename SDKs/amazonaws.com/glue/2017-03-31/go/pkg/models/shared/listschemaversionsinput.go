package shared

type ListSchemaVersionsInput struct {
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
	SchemaID   SchemaID `json:"SchemaId"`
}
