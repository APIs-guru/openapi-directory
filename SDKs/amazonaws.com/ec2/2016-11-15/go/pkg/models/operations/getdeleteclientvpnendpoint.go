package operations

type GetDeleteClientVpnEndpointActionEnum string

const (
	GetDeleteClientVpnEndpointActionEnumDeleteClientVpnEndpoint GetDeleteClientVpnEndpointActionEnum = "DeleteClientVpnEndpoint"
)

type GetDeleteClientVpnEndpointVersionEnum string

const (
	GetDeleteClientVpnEndpointVersionEnumTwoThousandAndSixteen1115 GetDeleteClientVpnEndpointVersionEnum = "2016-11-15"
)

type GetDeleteClientVpnEndpointQueryParams struct {
	Action              GetDeleteClientVpnEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientVpnEndpointID string                                `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DryRun              *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	Version             GetDeleteClientVpnEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteClientVpnEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteClientVpnEndpointRequest struct {
	QueryParams GetDeleteClientVpnEndpointQueryParams
	Headers     GetDeleteClientVpnEndpointHeaders
}

type GetDeleteClientVpnEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
