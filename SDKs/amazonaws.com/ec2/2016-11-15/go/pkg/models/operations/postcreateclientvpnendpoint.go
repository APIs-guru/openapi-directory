package operations

type PostCreateClientVpnEndpointActionEnum string

const (
	PostCreateClientVpnEndpointActionEnumCreateClientVpnEndpoint PostCreateClientVpnEndpointActionEnum = "CreateClientVpnEndpoint"
)

type PostCreateClientVpnEndpointVersionEnum string

const (
	PostCreateClientVpnEndpointVersionEnumTwoThousandAndSixteen1115 PostCreateClientVpnEndpointVersionEnum = "2016-11-15"
)

type PostCreateClientVpnEndpointQueryParams struct {
	Action  PostCreateClientVpnEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateClientVpnEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateClientVpnEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateClientVpnEndpointRequest struct {
	QueryParams PostCreateClientVpnEndpointQueryParams
	Headers     PostCreateClientVpnEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateClientVpnEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
