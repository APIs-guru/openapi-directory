package operations

type PostModifyClientVpnEndpointActionEnum string

const (
	PostModifyClientVpnEndpointActionEnumModifyClientVpnEndpoint PostModifyClientVpnEndpointActionEnum = "ModifyClientVpnEndpoint"
)

type PostModifyClientVpnEndpointVersionEnum string

const (
	PostModifyClientVpnEndpointVersionEnumTwoThousandAndSixteen1115 PostModifyClientVpnEndpointVersionEnum = "2016-11-15"
)

type PostModifyClientVpnEndpointQueryParams struct {
	Action  PostModifyClientVpnEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyClientVpnEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyClientVpnEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyClientVpnEndpointRequest struct {
	QueryParams PostModifyClientVpnEndpointQueryParams
	Headers     PostModifyClientVpnEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyClientVpnEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
