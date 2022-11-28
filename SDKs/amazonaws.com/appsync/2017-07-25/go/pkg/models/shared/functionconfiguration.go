package shared

// FunctionConfiguration
// A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
type FunctionConfiguration struct {
	DataSourceName          *string     `json:"dataSourceName,omitempty"`
	Description             *string     `json:"description,omitempty"`
	FunctionArn             *string     `json:"functionArn,omitempty"`
	FunctionID              *string     `json:"functionId,omitempty"`
	FunctionVersion         *string     `json:"functionVersion,omitempty"`
	Name                    *string     `json:"name,omitempty"`
	RequestMappingTemplate  *string     `json:"requestMappingTemplate,omitempty"`
	ResponseMappingTemplate *string     `json:"responseMappingTemplate,omitempty"`
	SyncConfig              *SyncConfig `json:"syncConfig,omitempty"`
}
