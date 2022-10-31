package shared



type RelationalDatabaseDataSourceConfig struct {
    RdsHTTPEndpointConfig *RdsHTTPEndpointConfig `json:"rdsHttpEndpointConfig,omitempty"`
    RelationalDatabaseSourceType *RelationalDatabaseSourceTypeEnum `json:"relationalDatabaseSourceType,omitempty"`
    
}

