package shared

// ColumnInfo
// Information about the columns in a query execution result.
type ColumnInfo struct {
	CaseSensitive *bool               `json:"CaseSensitive,omitempty"`
	CatalogName   *string             `json:"CatalogName,omitempty"`
	Label         *string             `json:"Label,omitempty"`
	Name          string              `json:"Name"`
	Nullable      *ColumnNullableEnum `json:"Nullable,omitempty"`
	Precision     *int64              `json:"Precision,omitempty"`
	Scale         *int64              `json:"Scale,omitempty"`
	SchemaName    *string             `json:"SchemaName,omitempty"`
	TableName     *string             `json:"TableName,omitempty"`
	Type          string              `json:"Type"`
}
