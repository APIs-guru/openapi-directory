package operations

import (
	"openapi/pkg/models/shared"
)

type RunTaskXAmzTargetEnum string

const (
	RunTaskXAmzTargetEnumAmazonEc2ContainerServiceV20141113RunTask RunTaskXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.RunTask"
)

type RunTaskHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RunTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RunTaskRequest struct {
	Headers RunTaskHeaders
	Request shared.RunTaskRequest `request:"mediaType=application/json"`
}

type RunTaskResponse struct {
	AccessDeniedException                          *interface{}
	BlockedException                               *interface{}
	ClientException                                *interface{}
	ClusterNotFoundException                       *interface{}
	ContentType                                    string
	InvalidParameterException                      *interface{}
	PlatformTaskDefinitionIncompatibilityException *interface{}
	PlatformUnknownException                       *interface{}
	RunTaskResponse                                *shared.RunTaskResponse
	ServerException                                *interface{}
	StatusCode                                     int64
	UnsupportedFeatureException                    *interface{}
}
