package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRepositoryXAmzTargetEnum string

const (
	CreateRepositoryXAmzTargetEnumAmazonEc2ContainerRegistryV20150921CreateRepository CreateRepositoryXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.CreateRepository"
)

type CreateRepositoryHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateRepositoryRequest struct {
	Headers CreateRepositoryHeaders
	Request shared.CreateRepositoryRequest `request:"mediaType=application/json"`
}

type CreateRepositoryResponse struct {
	ContentType                      string
	CreateRepositoryResponse         *shared.CreateRepositoryResponse
	InvalidParameterException        *interface{}
	InvalidTagParameterException     *interface{}
	KmsException                     *interface{}
	LimitExceededException           *interface{}
	RepositoryAlreadyExistsException *interface{}
	ServerException                  *interface{}
	StatusCode                       int64
	TooManyTagsException             *interface{}
}
