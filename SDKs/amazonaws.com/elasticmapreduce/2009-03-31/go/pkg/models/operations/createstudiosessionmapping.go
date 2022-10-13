package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStudioSessionMappingXAmzTargetEnum string

const (
	CreateStudioSessionMappingXAmzTargetEnumElasticMapReduceCreateStudioSessionMapping CreateStudioSessionMappingXAmzTargetEnum = "ElasticMapReduce.CreateStudioSessionMapping"
)

type CreateStudioSessionMappingHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStudioSessionMappingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateStudioSessionMappingRequest struct {
	Headers CreateStudioSessionMappingHeaders
	Request shared.CreateStudioSessionMappingInput `request:"mediaType=application/json"`
}

type CreateStudioSessionMappingResponse struct {
	ContentType             string
	InternalServerError     *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
