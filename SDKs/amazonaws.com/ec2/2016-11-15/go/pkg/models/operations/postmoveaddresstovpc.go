package operations

type PostMoveAddressToVpcActionEnum string

const (
	PostMoveAddressToVpcActionEnumMoveAddressToVpc PostMoveAddressToVpcActionEnum = "MoveAddressToVpc"
)

type PostMoveAddressToVpcVersionEnum string

const (
	PostMoveAddressToVpcVersionEnumTwoThousandAndSixteen1115 PostMoveAddressToVpcVersionEnum = "2016-11-15"
)

type PostMoveAddressToVpcQueryParams struct {
	Action  PostMoveAddressToVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostMoveAddressToVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostMoveAddressToVpcHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostMoveAddressToVpcRequest struct {
	QueryParams PostMoveAddressToVpcQueryParams
	Headers     PostMoveAddressToVpcHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostMoveAddressToVpcResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
