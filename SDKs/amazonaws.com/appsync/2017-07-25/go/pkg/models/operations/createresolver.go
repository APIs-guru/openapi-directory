package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResolverPathParams struct {
	APIID    string `pathParam:"style=simple,explode=false,name=apiId"`
	TypeName string `pathParam:"style=simple,explode=false,name=typeName"`
}

type CreateResolverHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateResolverRequestBodyCachingConfig
// The caching configuration for a resolver that has caching enabled.
type CreateResolverRequestBodyCachingConfig struct {
	CachingKeys []string `json:"cachingKeys,omitempty"`
	TTL         *int64   `json:"ttl,omitempty"`
}

type CreateResolverRequestBodyKindEnum string

const (
	CreateResolverRequestBodyKindEnumUnit     CreateResolverRequestBodyKindEnum = "UNIT"
	CreateResolverRequestBodyKindEnumPipeline CreateResolverRequestBodyKindEnum = "PIPELINE"
)

// CreateResolverRequestBodyPipelineConfig
// The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
type CreateResolverRequestBodyPipelineConfig struct {
	Functions []string `json:"functions,omitempty"`
}

// CreateResolverRequestBodySyncConfig
// <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
type CreateResolverRequestBodySyncConfig struct {
	ConflictDetection           *shared.ConflictDetectionTypeEnum   `json:"conflictDetection,omitempty"`
	ConflictHandler             *shared.ConflictHandlerTypeEnum     `json:"conflictHandler,omitempty"`
	LambdaConflictHandlerConfig *shared.LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig,omitempty"`
}

type CreateResolverRequestBody struct {
	CachingConfig           *CreateResolverRequestBodyCachingConfig  `json:"cachingConfig,omitempty"`
	DataSourceName          *string                                  `json:"dataSourceName,omitempty"`
	FieldName               string                                   `json:"fieldName"`
	Kind                    *CreateResolverRequestBodyKindEnum       `json:"kind,omitempty"`
	PipelineConfig          *CreateResolverRequestBodyPipelineConfig `json:"pipelineConfig,omitempty"`
	RequestMappingTemplate  *string                                  `json:"requestMappingTemplate,omitempty"`
	ResponseMappingTemplate *string                                  `json:"responseMappingTemplate,omitempty"`
	SyncConfig              *CreateResolverRequestBodySyncConfig     `json:"syncConfig,omitempty"`
}

type CreateResolverRequest struct {
	PathParams CreateResolverPathParams
	Headers    CreateResolverHeaders
	Request    CreateResolverRequestBody `request:"mediaType=application/json"`
}

type CreateResolverResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateResolverResponse          *shared.CreateResolverResponse
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
