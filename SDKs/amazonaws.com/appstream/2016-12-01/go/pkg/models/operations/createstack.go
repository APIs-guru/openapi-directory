package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStackXAmzTargetEnum string

const (
	CreateStackXAmzTargetEnumPhotonAdminProxyServiceCreateStack CreateStackXAmzTargetEnum = "PhotonAdminProxyService.CreateStack"
)

type CreateStackHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateStackRequest struct {
	Headers CreateStackHeaders
	Request shared.CreateStackRequest `request:"mediaType=application/json"`
}

type CreateStackResponse struct {
	ConcurrentModificationException      *interface{}
	ContentType                          string
	CreateStackResult                    *shared.CreateStackResult
	InvalidAccountStatusException        *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidRoleException                 *interface{}
	LimitExceededException               *interface{}
	ResourceAlreadyExistsException       *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
