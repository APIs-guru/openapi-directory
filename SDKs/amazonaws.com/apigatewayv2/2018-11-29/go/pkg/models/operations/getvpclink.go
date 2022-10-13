package operations

import (
	"openapi/pkg/models/shared"
)

type GetVpcLinkPathParams struct {
	VpcLinkID string `pathParam:"style=simple,explode=false,name=vpcLinkId"`
}

type GetVpcLinkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetVpcLinkRequest struct {
	PathParams GetVpcLinkPathParams
	Headers    GetVpcLinkHeaders
}

type GetVpcLinkResponse struct {
	ContentType              string
	GetVpcLinkResponse       *shared.GetVpcLinkResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
