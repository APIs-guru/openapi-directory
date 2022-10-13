package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDomainAssociationPathParams struct {
	AppID      string `pathParam:"style=simple,explode=false,name=appId"`
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type DeleteDomainAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDomainAssociationRequest struct {
	PathParams DeleteDomainAssociationPathParams
	Headers    DeleteDomainAssociationHeaders
}

type DeleteDomainAssociationResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	DeleteDomainAssociationResult    *shared.DeleteDomainAssociationResult
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
}
