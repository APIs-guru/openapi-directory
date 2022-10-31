package operations

import (
	"openapi/pkg/models/shared"
)

type GetStudioSessionMappingXAmzTargetEnum string

const (
	GetStudioSessionMappingXAmzTargetEnumElasticMapReduceGetStudioSessionMapping GetStudioSessionMappingXAmzTargetEnum = "ElasticMapReduce.GetStudioSessionMapping"
)

type GetStudioSessionMappingHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetStudioSessionMappingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
