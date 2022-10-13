package shared

type RelationalDatabaseDataSourceConfig struct {
	RdsHTTPEndpointConfig        *RdsHTTPEndpointConfig            `json:"rdsHttpEndpointConfig"`
	RelationalDatabaseSourceType *RelationalDatabaseSourceTypeEnum `json:"relationalDatabaseSourceType"`
}
