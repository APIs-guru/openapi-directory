package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVpcLinkPathParams struct {
	VpclinkID string `pathParam:"style=simple,explode=false,name=vpclink_id"`
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
	PatchOperations []shared.PatchOperation `json:"patchOperations"`
}

type UpdateVpcLinkRequest struct {
	PathParams UpdateVpcLinkPathParams
	Headers    UpdateVpcLinkHeaders
	Request    UpdateVpcLinkRequestBody `request:"mediaType=application/json"`
}

type UpdateVpcLinkResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
	VpcLink                  *shared.VpcLink
}
