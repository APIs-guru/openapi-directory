package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterContainerInstanceXAmzTargetEnum string

const (
	RegisterContainerInstanceXAmzTargetEnumAmazonEc2ContainerServiceV20141113RegisterContainerInstance RegisterContainerInstanceXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance"
)

type RegisterContainerInstanceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterContainerInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterContainerInstanceRequest struct {
	Headers RegisterContainerInstanceHeaders
	Request shared.RegisterContainerInstanceRequest `request:"mediaType=application/json"`
}

type RegisterContainerInstanceResponse struct {
	ClientException                   *interface{}
	ContentType                       string
	InvalidParameterException         *interface{}
	RegisterContainerInstanceResponse *shared.RegisterContainerInstanceResponse
	ServerException                   *interface{}
	StatusCode                        int64
}
