package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserXAmzTargetEnum string

const (
	CreateUserXAmzTargetEnumPhotonAdminProxyServiceCreateUser CreateUserXAmzTargetEnum = "PhotonAdminProxyService.CreateUser"
)

type CreateUserHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateUserRequest struct {
	Headers CreateUserHeaders
	Request shared.CreateUserRequest `request:"mediaType=application/json"`
}

type CreateUserResponse struct {
	ContentType                          string
	CreateUserResult                     map[string]interface{}
	InvalidAccountStatusException        *interface{}
	InvalidParameterCombinationException *interface{}
	LimitExceededException               *interface{}
	OperationNotPermittedException       *interface{}
	ResourceAlreadyExistsException       *interface{}
	StatusCode                           int64
}
