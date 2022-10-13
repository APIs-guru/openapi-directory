package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStudioXAmzTargetEnum string

const (
	UpdateStudioXAmzTargetEnumElasticMapReduceUpdateStudio UpdateStudioXAmzTargetEnum = "ElasticMapReduce.UpdateStudio"
)

type UpdateStudioHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateStudioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateStudioRequest struct {
	Headers UpdateStudioHeaders
	Request shared.UpdateStudioInput `request:"mediaType=application/json"`
}

type UpdateStudioResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
