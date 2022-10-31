package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTaskSetXAmzTargetEnum string

const (
	CreateTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateTaskSet CreateTaskSetXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.CreateTaskSet"
)

type CreateTaskSetHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTaskSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateTaskSetRequest struct {
	Headers CreateTaskSetHeaders
	Request shared.CreateTaskSetRequest `request:"mediaType=application/json"`
}

type CreateTaskSetResponse struct {
	AccessDeniedException                          *interface{}
	ClientException                                *interface{}
	ClusterNotFoundException                       *interface{}
	ContentType                                    string
	CreateTaskSetResponse                          *shared.CreateTaskSetResponse
	InvalidParameterException                      *interface{}
	PlatformTaskDefinitionIncompatibilityException *interface{}
	PlatformUnknownException                       *interface{}
	ServerException                                *interface{}
	ServiceNotActiveException                      *interface{}
	ServiceNotFoundException                       *interface{}
	StatusCode                                     int64
	UnsupportedFeatureException                    *interface{}
}
