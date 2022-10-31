package operations

type DeleteVpcLinkPathParams struct {
	VpcLinkID string `pathParam:"style=simple,explode=false,name=vpcLinkId"`
}

type DeleteVpcLinkHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteVpcLinkRequest struct {
	PathParams DeleteVpcLinkPathParams
	Headers    DeleteVpcLinkHeaders
}

type DeleteVpcLinkResponse struct {
	ContentType              string
	DeleteVpcLinkResponse    map[string]interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
