package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVpcLinkPathParams struct {
	VpcLinkID string `pathParam:"style=simple,explode=false,name=vpcLinkId"`
}

type UpdateVpcLinkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateVpcLinkRequestBody struct {
	Name *string `json:"name"`
}

type UpdateVpcLinkRequest struct {
	PathParams UpdateVpcLinkPathParams
	Headers    UpdateVpcLinkHeaders
	Request    UpdateVpcLinkRequestBody `request:"mediaType=application/json"`
}

type UpdateVpcLinkResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateVpcLinkResponse    *shared.UpdateVpcLinkResponse
}
