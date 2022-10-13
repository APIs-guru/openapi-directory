package operations

import (
	"openapi/pkg/models/shared"
)

type GetStudioSessionMappingXAmzTargetEnum string

const (
	GetStudioSessionMappingXAmzTargetEnumElasticMapReduceGetStudioSessionMapping GetStudioSessionMappingXAmzTargetEnum = "ElasticMapReduce.GetStudioSessionMapping"
)

type GetStudioSessionMappingHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetStudioSessionMappingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetStudioSessionMappingRequest struct {
	Headers GetStudioSessionMappingHeaders
	Request shared.GetStudioSessionMappingInput `request:"mediaType=application/json"`
}

type GetStudioSessionMappingResponse struct {
	ContentType                   string
	GetStudioSessionMappingOutput *shared.GetStudioSessionMappingOutput
	InternalServerError           *interface{}
	InvalidRequestException       *interface{}
	StatusCode                    int64
}
