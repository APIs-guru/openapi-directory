package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTaskSetXAmzTargetEnum string

const (
	UpdateTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateTaskSet UpdateTaskSetXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateTaskSet"
)

type UpdateTaskSetHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTaskSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTaskSetRequest struct {
	Headers UpdateTaskSetHeaders
	Request shared.UpdateTaskSetRequest `request:"mediaType=application/json"`
}

type UpdateTaskSetResponse struct {
	AccessDeniedException       *interface{}
	ClientException             *interface{}
	ClusterNotFoundException    *interface{}
	ContentType                 string
	InvalidParameterException   *interface{}
	ServerException             *interface{}
	ServiceNotActiveException   *interface{}
	ServiceNotFoundException    *interface{}
	StatusCode                  int64
	TaskSetNotFoundException    *interface{}
	UnsupportedFeatureException *interface{}
	UpdateTaskSetResponse       *shared.UpdateTaskSetResponse
}
