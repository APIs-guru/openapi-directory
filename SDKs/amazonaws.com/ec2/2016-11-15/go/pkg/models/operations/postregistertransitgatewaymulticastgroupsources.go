package operations

type PostRegisterTransitGatewayMulticastGroupSourcesActionEnum string

const (
	PostRegisterTransitGatewayMulticastGroupSourcesActionEnumRegisterTransitGatewayMulticastGroupSources PostRegisterTransitGatewayMulticastGroupSourcesActionEnum = "RegisterTransitGatewayMulticastGroupSources"
)

type PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum string

const (
	PostRegisterTransitGatewayMulticastGroupSourcesVersionEnumTwoThousandAndSixteen1115 PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum = "2016-11-15"
)

type PostRegisterTransitGatewayMulticastGroupSourcesQueryParams struct {
	Action  PostRegisterTransitGatewayMulticastGroupSourcesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRegisterTransitGatewayMulticastGroupSourcesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRegisterTransitGatewayMulticastGroupSourcesRequest struct {
	QueryParams PostRegisterTransitGatewayMulticastGroupSourcesQueryParams
	Headers     PostRegisterTransitGatewayMulticastGroupSourcesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRegisterTransitGatewayMulticastGroupSourcesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
