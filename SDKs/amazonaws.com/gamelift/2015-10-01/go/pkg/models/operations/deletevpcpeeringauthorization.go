package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVpcPeeringAuthorizationXAmzTargetEnum string

const (
	DeleteVpcPeeringAuthorizationXAmzTargetEnumGameLiftDeleteVpcPeeringAuthorization DeleteVpcPeeringAuthorizationXAmzTargetEnum = "GameLift.DeleteVpcPeeringAuthorization"
)

type DeleteVpcPeeringAuthorizationHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteVpcPeeringAuthorizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteVpcPeeringAuthorizationRequest struct {
	Headers DeleteVpcPeeringAuthorizationHeaders
	Request shared.DeleteVpcPeeringAuthorizationInput `request:"mediaType=application/json"`
}

type DeleteVpcPeeringAuthorizationResponse struct {
	ContentType                         string
	DeleteVpcPeeringAuthorizationOutput map[string]interface{}
	InternalServiceException            *interface{}
	InvalidRequestException             *interface{}
	NotFoundException                   *interface{}
	StatusCode                          int64
	UnauthorizedException               *interface{}
}
