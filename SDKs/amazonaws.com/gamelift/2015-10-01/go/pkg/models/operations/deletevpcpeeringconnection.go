package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVpcPeeringConnectionXAmzTargetEnum string

const (
	DeleteVpcPeeringConnectionXAmzTargetEnumGameLiftDeleteVpcPeeringConnection DeleteVpcPeeringConnectionXAmzTargetEnum = "GameLift.DeleteVpcPeeringConnection"
)

type DeleteVpcPeeringConnectionHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteVpcPeeringConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteVpcPeeringConnectionRequest struct {
	Headers DeleteVpcPeeringConnectionHeaders
	Request shared.DeleteVpcPeeringConnectionInput `request:"mediaType=application/json"`
}

type DeleteVpcPeeringConnectionResponse struct {
	ContentType                      string
	DeleteVpcPeeringConnectionOutput map[string]interface{}
	InternalServiceException         *interface{}
	InvalidRequestException          *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
}
