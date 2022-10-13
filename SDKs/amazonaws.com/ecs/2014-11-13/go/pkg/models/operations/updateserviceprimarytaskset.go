package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServicePrimaryTaskSetXAmzTargetEnum string

const (
	UpdateServicePrimaryTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateServicePrimaryTaskSet UpdateServicePrimaryTaskSetXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet"
)

type UpdateServicePrimaryTaskSetHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServicePrimaryTaskSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServicePrimaryTaskSetRequest struct {
	Headers UpdateServicePrimaryTaskSetHeaders
	Request shared.UpdateServicePrimaryTaskSetRequest `request:"mediaType=application/json"`
}

type UpdateServicePrimaryTaskSetResponse struct {
	AccessDeniedException               *interface{}
	ClientException                     *interface{}
	ClusterNotFoundException            *interface{}
	ContentType                         string
	InvalidParameterException           *interface{}
	ServerException                     *interface{}
	ServiceNotActiveException           *interface{}
	ServiceNotFoundException            *interface{}
	StatusCode                          int64
	TaskSetNotFoundException            *interface{}
	UnsupportedFeatureException         *interface{}
	UpdateServicePrimaryTaskSetResponse *shared.UpdateServicePrimaryTaskSetResponse
}
