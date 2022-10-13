package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoryXAmzTargetEnum string

const (
	DeleteRepositoryXAmzTargetEnumSpencerFrontendServiceDeleteRepository DeleteRepositoryXAmzTargetEnum = "SpencerFrontendService.DeleteRepository"
)

type DeleteRepositoryHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRepositoryRequest struct {
	Headers DeleteRepositoryHeaders
	Request shared.DeleteRepositoryRequest `request:"mediaType=application/json"`
}

type DeleteRepositoryResponse struct {
	ContentType                 string
	DeleteRepositoryResponse    *shared.DeleteRepositoryResponse
	InvalidParameterException   *interface{}
	RepositoryNotEmptyException *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
