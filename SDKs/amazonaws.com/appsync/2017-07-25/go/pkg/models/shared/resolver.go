package shared

type Resolver struct {
	CachingConfig           *CachingConfig    `json:"cachingConfig,omitempty"`
	DataSourceName          *string           `json:"dataSourceName,omitempty"`
	FieldName               *string           `json:"fieldName,omitempty"`
	Kind                    *ResolverKindEnum `json:"kind,omitempty"`
	PipelineConfig          *PipelineConfig   `json:"pipelineConfig,omitempty"`
	RequestMappingTemplate  *string           `json:"requestMappingTemplate,omitempty"`
	ResolverArn             *string           `json:"resolverArn,omitempty"`
	ResponseMappingTemplate *string           `json:"responseMappingTemplate,omitempty"`
	SyncConfig              *SyncConfig       `json:"syncConfig,omitempty"`
	TypeName                *string           `json:"typeName,omitempty"`
}
