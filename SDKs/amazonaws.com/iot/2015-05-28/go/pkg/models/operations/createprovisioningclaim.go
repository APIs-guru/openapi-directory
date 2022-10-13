package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProvisioningClaimPathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
}

type CreateProvisioningClaimHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateProvisioningClaimRequest struct {
	PathParams CreateProvisioningClaimPathParams
	Headers    CreateProvisioningClaimHeaders
}

type CreateProvisioningClaimResponse struct {
	ContentType                     string
	CreateProvisioningClaimResponse *shared.CreateProvisioningClaimResponse
	InternalFailureException        *interface{}
	InvalidRequestException         *interface{}
	ResourceNotFoundException       *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	UnauthorizedException           *interface{}
}
