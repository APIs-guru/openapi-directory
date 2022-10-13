package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStudioXAmzTargetEnum string

const (
	CreateStudioXAmzTargetEnumElasticMapReduceCreateStudio CreateStudioXAmzTargetEnum = "ElasticMapReduce.CreateStudio"
)

type CreateStudioHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStudioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateStudioRequest struct {
	Headers CreateStudioHeaders
	Request shared.CreateStudioInput `request:"mediaType=application/json"`
}

type CreateStudioResponse struct {
	ContentType             string
	CreateStudioOutput      *shared.CreateStudioOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
