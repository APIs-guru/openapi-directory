package shared

// ParquetConfiguration
// Contains the configuration information of the Parquet format.
type ParquetConfiguration struct {
	SchemaDefinition *SchemaDefinition `json:"schemaDefinition,omitempty"`
}
