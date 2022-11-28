package shared

// ImportDataSourceConfig
//
//	An object that contains the configuration parameters for the data source of an import request.
type ImportDataSourceConfig struct {
	DataSourceURL *string `json:"dataSourceUrl,omitempty"`
}
