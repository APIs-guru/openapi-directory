package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoryXAmzTargetEnum string

const (
	DeleteRepositoryXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeleteRepository DeleteRepositoryXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.DeleteRepository"
)

type DeleteRepositoryHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteRepositoryRequest struct {
	Headers DeleteRepositoryHeaders
	Request shared.DeleteRepositoryRequest `request:"mediaType=application/json"`
}

type DeleteRepositoryResponse struct {
	ContentType                 string
	DeleteRepositoryResponse    *shared.DeleteRepositoryResponse
	InvalidParameterException   *interface{}
	KmsException                *interface{}
	RepositoryNotEmptyException *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
