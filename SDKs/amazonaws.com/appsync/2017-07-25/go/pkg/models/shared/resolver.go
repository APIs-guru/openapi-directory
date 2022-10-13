package shared

type Resolver struct {
	CachingConfig           *CachingConfig    `json:"cachingConfig"`
	DataSourceName          *string           `json:"dataSourceName"`
	FieldName               *string           `json:"fieldName"`
	Kind                    *ResolverKindEnum `json:"kind"`
	PipelineConfig          *PipelineConfig   `json:"pipelineConfig"`
	RequestMappingTemplate  *string           `json:"requestMappingTemplate"`
	ResolverArn             *string           `json:"resolverArn"`
	ResponseMappingTemplate *string           `json:"responseMappingTemplate"`
	SyncConfig              *SyncConfig       `json:"syncConfig"`
	TypeName                *string           `json:"typeName"`
}
