package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStudioSessionMappingXAmzTargetEnum string

const (
	DeleteStudioSessionMappingXAmzTargetEnumElasticMapReduceDeleteStudioSessionMapping DeleteStudioSessionMappingXAmzTargetEnum = "ElasticMapReduce.DeleteStudioSessionMapping"
)

type DeleteStudioSessionMappingHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStudioSessionMappingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStudioSessionMappingRequest struct {
	Headers DeleteStudioSessionMappingHeaders
	Request shared.DeleteStudioSessionMappingInput `request:"mediaType=application/json"`
}

type DeleteStudioSessionMappingResponse struct {
	ContentType             string
	InternalServerError     *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
