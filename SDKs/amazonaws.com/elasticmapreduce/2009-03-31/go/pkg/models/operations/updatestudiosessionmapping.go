package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStudioSessionMappingXAmzTargetEnum string

const (
	UpdateStudioSessionMappingXAmzTargetEnumElasticMapReduceUpdateStudioSessionMapping UpdateStudioSessionMappingXAmzTargetEnum = "ElasticMapReduce.UpdateStudioSessionMapping"
)

type UpdateStudioSessionMappingHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateStudioSessionMappingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateStudioSessionMappingRequest struct {
	Headers UpdateStudioSessionMappingHeaders
	Request shared.UpdateStudioSessionMappingInput `request:"mediaType=application/json"`
}

type UpdateStudioSessionMappingResponse struct {
	ContentType             string
	InternalServerError     *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
