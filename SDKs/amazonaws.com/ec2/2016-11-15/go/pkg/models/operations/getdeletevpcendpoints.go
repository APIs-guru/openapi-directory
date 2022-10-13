package operations

type GetDeleteVpcEndpointsActionEnum string

const (
	GetDeleteVpcEndpointsActionEnumDeleteVpcEndpoints GetDeleteVpcEndpointsActionEnum = "DeleteVpcEndpoints"
)

type GetDeleteVpcEndpointsVersionEnum string

const (
	GetDeleteVpcEndpointsVersionEnumTwoThousandAndSixteen1115 GetDeleteVpcEndpointsVersionEnum = "2016-11-15"
)

type GetDeleteVpcEndpointsQueryParams struct {
	Action        GetDeleteVpcEndpointsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun        *bool                            `queryParam:"style=form,explode=true,name=DryRun"`
	Version       GetDeleteVpcEndpointsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcEndpointID []string                         `queryParam:"style=form,explode=true,name=VpcEndpointId"`
}

type GetDeleteVpcEndpointsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteVpcEndpointsRequest struct {
	QueryParams GetDeleteVpcEndpointsQueryParams
	Headers     GetDeleteVpcEndpointsHeaders
}

type GetDeleteVpcEndpointsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
