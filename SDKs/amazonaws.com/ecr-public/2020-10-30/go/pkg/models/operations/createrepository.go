package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRepositoryXAmzTargetEnum string

const (
	CreateRepositoryXAmzTargetEnumSpencerFrontendServiceCreateRepository CreateRepositoryXAmzTargetEnum = "SpencerFrontendService.CreateRepository"
)

type CreateRepositoryHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
	LimitExceededException           *interface{}
	RepositoryAlreadyExistsException *interface{}
	ServerException                  *interface{}
	StatusCode                       int64
	TooManyTagsException             *interface{}
}
