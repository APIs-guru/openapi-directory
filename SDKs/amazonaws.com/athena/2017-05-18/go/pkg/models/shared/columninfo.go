package shared

type ColumnInfo struct {
	CaseSensitive *bool               `json:"CaseSensitive"`
	CatalogName   *string             `json:"CatalogName"`
	Label         *string             `json:"Label"`
	Name          string              `json:"Name"`
	Nullable      *ColumnNullableEnum `json:"Nullable"`
	Precision     *int64              `json:"Precision"`
	Scale         *int64              `json:"Scale"`
	SchemaName    *string             `json:"SchemaName"`
	TableName     *string             `json:"TableName"`
	Type          string              `json:"Type"`
}
