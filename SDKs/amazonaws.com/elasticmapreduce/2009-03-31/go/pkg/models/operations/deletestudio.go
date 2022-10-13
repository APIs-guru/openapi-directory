package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStudioXAmzTargetEnum string

const (
	DeleteStudioXAmzTargetEnumElasticMapReduceDeleteStudio DeleteStudioXAmzTargetEnum = "ElasticMapReduce.DeleteStudio"
)

type DeleteStudioHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStudioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStudioRequest struct {
	Headers DeleteStudioHeaders
	Request shared.DeleteStudioInput `request:"mediaType=application/json"`
}

type DeleteStudioResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
