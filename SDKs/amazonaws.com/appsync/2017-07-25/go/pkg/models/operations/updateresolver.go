package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResolverPathParams struct {
	APIID     string `pathParam:"style=simple,explode=false,name=apiId"`
	FieldName string `pathParam:"style=simple,explode=false,name=fieldName"`
	TypeName  string `pathParam:"style=simple,explode=false,name=typeName"`
}

type UpdateResolverHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateResolverRequestBodyCachingConfig
// The caching configuration for a resolver that has caching enabled.
type UpdateResolverRequestBodyCachingConfig struct {
	CachingKeys []string `json:"cachingKeys,omitempty"`
	TTL         *int64   `json:"ttl,omitempty"`
}

type UpdateResolverRequestBodyKindEnum string

const (
	UpdateResolverRequestBodyKindEnumUnit     UpdateResolverRequestBodyKindEnum = "UNIT"
	UpdateResolverRequestBodyKindEnumPipeline UpdateResolverRequestBodyKindEnum = "PIPELINE"
)

// UpdateResolverRequestBodyPipelineConfig
// The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
type UpdateResolverRequestBodyPipelineConfig struct {
	Functions []string `json:"functions,omitempty"`
}

// UpdateResolverRequestBodySyncConfig
// <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
type UpdateResolverRequestBodySyncConfig struct {
	ConflictDetection           *shared.ConflictDetectionTypeEnum   `json:"conflictDetection,omitempty"`
	ConflictHandler             *shared.ConflictHandlerTypeEnum     `json:"conflictHandler,omitempty"`
	LambdaConflictHandlerConfig *shared.LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig,omitempty"`
}

type UpdateResolverRequestBody struct {
	CachingConfig           *UpdateResolverRequestBodyCachingConfig  `json:"cachingConfig,omitempty"`
	DataSourceName          *string                                  `json:"dataSourceName,omitempty"`
	Kind                    *UpdateResolverRequestBodyKindEnum       `json:"kind,omitempty"`
	PipelineConfig          *UpdateResolverRequestBodyPipelineConfig `json:"pipelineConfig,omitempty"`
	RequestMappingTemplate  *string                                  `json:"requestMappingTemplate,omitempty"`
	ResponseMappingTemplate *string                                  `json:"responseMappingTemplate,omitempty"`
	SyncConfig              *UpdateResolverRequestBodySyncConfig     `json:"syncConfig,omitempty"`
}

type UpdateResolverRequest struct {
	PathParams UpdateResolverPathParams
	Headers    UpdateResolverHeaders
	Request    UpdateResolverRequestBody `request:"mediaType=application/json"`
}

type UpdateResolverResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
	UpdateResolverResponse          *shared.UpdateResolverResponse
}
