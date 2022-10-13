package operations

type PostDeleteClientVpnEndpointActionEnum string

const (
	PostDeleteClientVpnEndpointActionEnumDeleteClientVpnEndpoint PostDeleteClientVpnEndpointActionEnum = "DeleteClientVpnEndpoint"
)

type PostDeleteClientVpnEndpointVersionEnum string

const (
	PostDeleteClientVpnEndpointVersionEnumTwoThousandAndSixteen1115 PostDeleteClientVpnEndpointVersionEnum = "2016-11-15"
)

type PostDeleteClientVpnEndpointQueryParams struct {
	Action  PostDeleteClientVpnEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteClientVpnEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteClientVpnEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteClientVpnEndpointRequest struct {
	QueryParams PostDeleteClientVpnEndpointQueryParams
	Headers     PostDeleteClientVpnEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteClientVpnEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
