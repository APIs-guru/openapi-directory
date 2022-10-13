package operations

type GetMoveAddressToVpcActionEnum string

const (
	GetMoveAddressToVpcActionEnumMoveAddressToVpc GetMoveAddressToVpcActionEnum = "MoveAddressToVpc"
)

type GetMoveAddressToVpcVersionEnum string

const (
	GetMoveAddressToVpcVersionEnumTwoThousandAndSixteen1115 GetMoveAddressToVpcVersionEnum = "2016-11-15"
)

type GetMoveAddressToVpcQueryParams struct {
	Action   GetMoveAddressToVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun   *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	PublicIP string                         `queryParam:"style=form,explode=true,name=PublicIp"`
	Version  GetMoveAddressToVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetMoveAddressToVpcHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetMoveAddressToVpcRequest struct {
	QueryParams GetMoveAddressToVpcQueryParams
	Headers     GetMoveAddressToVpcHeaders
}

type GetMoveAddressToVpcResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
