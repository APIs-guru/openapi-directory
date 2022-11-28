package shared

// RelationalDatabaseDataSourceConfig
// Describes a relational database data source configuration.
type RelationalDatabaseDataSourceConfig struct {
	RdsHTTPEndpointConfig        *RdsHTTPEndpointConfig            `json:"rdsHttpEndpointConfig,omitempty"`
	RelationalDatabaseSourceType *RelationalDatabaseSourceTypeEnum `json:"relationalDatabaseSourceType,omitempty"`
}
