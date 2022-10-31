package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStudioSessionMappingXAmzTargetEnum string

const (
	UpdateStudioSessionMappingXAmzTargetEnumElasticMapReduceUpdateStudioSessionMapping UpdateStudioSessionMappingXAmzTargetEnum = "ElasticMapReduce.UpdateStudioSessionMapping"
)

type UpdateStudioSessionMappingHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateStudioSessionMappingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
