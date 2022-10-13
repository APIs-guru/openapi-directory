package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResolverPathParams struct {
	APIID    string `pathParam:"style=simple,explode=false,name=apiId"`
	TypeName string `pathParam:"style=simple,explode=false,name=typeName"`
}

type CreateResolverHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateResolverRequestBodyCachingConfig struct {
	CachingKeys []string `json:"cachingKeys"`
	TTL         *int64   `json:"ttl"`
}

type CreateResolverRequestBodyKindEnum string

const (
	CreateResolverRequestBodyKindEnumUnit     CreateResolverRequestBodyKindEnum = "UNIT"
	CreateResolverRequestBodyKindEnumPipeline CreateResolverRequestBodyKindEnum = "PIPELINE"
)

type CreateResolverRequestBodyPipelineConfig struct {
	Functions []string `json:"functions"`
}

type CreateResolverRequestBodySyncConfig struct {
	ConflictDetection           *shared.ConflictDetectionTypeEnum   `json:"conflictDetection"`
	ConflictHandler             *shared.ConflictHandlerTypeEnum     `json:"conflictHandler"`
	LambdaConflictHandlerConfig *shared.LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig"`
}

type CreateResolverRequestBody struct {
	CachingConfig           *CreateResolverRequestBodyCachingConfig  `json:"cachingConfig"`
	DataSourceName          *string                                  `json:"dataSourceName"`
	FieldName               string                                   `json:"fieldName"`
	Kind                    *CreateResolverRequestBodyKindEnum       `json:"kind"`
	PipelineConfig          *CreateResolverRequestBodyPipelineConfig `json:"pipelineConfig"`
	RequestMappingTemplate  *string                                  `json:"requestMappingTemplate"`
	ResponseMappingTemplate *string                                  `json:"responseMappingTemplate"`
	SyncConfig              *CreateResolverRequestBodySyncConfig     `json:"syncConfig"`
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
