package shared

type FunctionConfiguration struct {
	DataSourceName          *string     `json:"dataSourceName"`
	Description             *string     `json:"description"`
	FunctionArn             *string     `json:"functionArn"`
	FunctionID              *string     `json:"functionId"`
	FunctionVersion         *string     `json:"functionVersion"`
	Name                    *string     `json:"name"`
	RequestMappingTemplate  *string     `json:"requestMappingTemplate"`
	ResponseMappingTemplate *string     `json:"responseMappingTemplate"`
	SyncConfig              *SyncConfig `json:"syncConfig"`
}
