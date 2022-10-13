package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVpcPeeringAuthorizationXAmzTargetEnum string

const (
	CreateVpcPeeringAuthorizationXAmzTargetEnumGameLiftCreateVpcPeeringAuthorization CreateVpcPeeringAuthorizationXAmzTargetEnum = "GameLift.CreateVpcPeeringAuthorization"
)

type CreateVpcPeeringAuthorizationHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateVpcPeeringAuthorizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateVpcPeeringAuthorizationRequest struct {
	Headers CreateVpcPeeringAuthorizationHeaders
	Request shared.CreateVpcPeeringAuthorizationInput `request:"mediaType=application/json"`
}

type CreateVpcPeeringAuthorizationResponse struct {
	ContentType                         string
	CreateVpcPeeringAuthorizationOutput *shared.CreateVpcPeeringAuthorizationOutput
	InternalServiceException            *interface{}
	InvalidRequestException             *interface{}
	NotFoundException                   *interface{}
	StatusCode                          int64
	UnauthorizedException               *interface{}
}
