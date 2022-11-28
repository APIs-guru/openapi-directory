package shared

// ImportDataSource
// An object that has details about the source of the data that was submitted for import.
type ImportDataSource struct {
	DataSourceConfig ImportDataSourceConfig `json:"dataSourceConfig"`
}
