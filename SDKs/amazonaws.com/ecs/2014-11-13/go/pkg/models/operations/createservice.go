package operations

import (
	"openapi/pkg/models/shared"
)

type CreateServiceXAmzTargetEnum string

const (
	CreateServiceXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateService CreateServiceXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.CreateService"
)

type CreateServiceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateServiceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateServiceRequest struct {
	Headers CreateServiceHeaders
	Request shared.CreateServiceRequest `request:"mediaType=application/json"`
}

type CreateServiceResponse struct {
	AccessDeniedException                          *interface{}
	ClientException                                *interface{}
	ClusterNotFoundException                       *interface{}
	ContentType                                    string
	CreateServiceResponse                          *shared.CreateServiceResponse
	InvalidParameterException                      *interface{}
	PlatformTaskDefinitionIncompatibilityException *interface{}
	PlatformUnknownException                       *interface{}
	ServerException                                *interface{}
	StatusCode                                     int64
	UnsupportedFeatureException                    *interface{}
}
