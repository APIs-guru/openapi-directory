package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImageBuilderXAmzTargetEnum string

const (
	CreateImageBuilderXAmzTargetEnumPhotonAdminProxyServiceCreateImageBuilder CreateImageBuilderXAmzTargetEnum = "PhotonAdminProxyService.CreateImageBuilder"
)

type CreateImageBuilderHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateImageBuilderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateImageBuilderRequest struct {
	Headers CreateImageBuilderHeaders
	Request shared.CreateImageBuilderRequest `request:"mediaType=application/json"`
}

type CreateImageBuilderResponse struct {
	ConcurrentModificationException      *interface{}
	ContentType                          string
	CreateImageBuilderResult             *shared.CreateImageBuilderResult
	IncompatibleImageException           *interface{}
	InvalidAccountStatusException        *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidRoleException                 *interface{}
	LimitExceededException               *interface{}
	OperationNotPermittedException       *interface{}
	RequestLimitExceededException        *interface{}
	ResourceAlreadyExistsException       *interface{}
	ResourceNotAvailableException        *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
