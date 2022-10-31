package operations

type PostDeleteTransitGatewayConnectActionEnum string

const (
	PostDeleteTransitGatewayConnectActionEnumDeleteTransitGatewayConnect PostDeleteTransitGatewayConnectActionEnum = "DeleteTransitGatewayConnect"
)

type PostDeleteTransitGatewayConnectVersionEnum string

const (
	PostDeleteTransitGatewayConnectVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayConnectVersionEnum = "2016-11-15"
)

type PostDeleteTransitGatewayConnectQueryParams struct {
	Action  PostDeleteTransitGatewayConnectActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTransitGatewayConnectVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTransitGatewayConnectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteTransitGatewayConnectRequest struct {
	QueryParams PostDeleteTransitGatewayConnectQueryParams
	Headers     PostDeleteTransitGatewayConnectHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTransitGatewayConnectResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
