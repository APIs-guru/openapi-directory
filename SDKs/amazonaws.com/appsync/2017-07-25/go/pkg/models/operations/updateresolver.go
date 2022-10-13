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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateResolverRequestBodyCachingConfig struct {
	CachingKeys []string `json:"cachingKeys"`
	TTL         *int64   `json:"ttl"`
}

type UpdateResolverRequestBodyKindEnum string

const (
	UpdateResolverRequestBodyKindEnumUnit     UpdateResolverRequestBodyKindEnum = "UNIT"
	UpdateResolverRequestBodyKindEnumPipeline UpdateResolverRequestBodyKindEnum = "PIPELINE"
)

type UpdateResolverRequestBodyPipelineConfig struct {
	Functions []string `json:"functions"`
}

type UpdateResolverRequestBodySyncConfig struct {
	ConflictDetection           *shared.ConflictDetectionTypeEnum   `json:"conflictDetection"`
	ConflictHandler             *shared.ConflictHandlerTypeEnum     `json:"conflictHandler"`
	LambdaConflictHandlerConfig *shared.LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig"`
}

type UpdateResolverRequestBody struct {
	CachingConfig           *UpdateResolverRequestBodyCachingConfig  `json:"cachingConfig"`
	DataSourceName          *string                                  `json:"dataSourceName"`
	Kind                    *UpdateResolverRequestBodyKindEnum       `json:"kind"`
	PipelineConfig          *UpdateResolverRequestBodyPipelineConfig `json:"pipelineConfig"`
	RequestMappingTemplate  *string                                  `json:"requestMappingTemplate"`
	ResponseMappingTemplate *string                                  `json:"responseMappingTemplate"`
	SyncConfig              *UpdateResolverRequestBodySyncConfig     `json:"syncConfig"`
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
