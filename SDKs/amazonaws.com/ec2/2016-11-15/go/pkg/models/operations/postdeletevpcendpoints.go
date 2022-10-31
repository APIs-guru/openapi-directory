package operations

type PostDeleteVpcEndpointsActionEnum string

const (
	PostDeleteVpcEndpointsActionEnumDeleteVpcEndpoints PostDeleteVpcEndpointsActionEnum = "DeleteVpcEndpoints"
)

type PostDeleteVpcEndpointsVersionEnum string

const (
	PostDeleteVpcEndpointsVersionEnumTwoThousandAndSixteen1115 PostDeleteVpcEndpointsVersionEnum = "2016-11-15"
)

type PostDeleteVpcEndpointsQueryParams struct {
	Action  PostDeleteVpcEndpointsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteVpcEndpointsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteVpcEndpointsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteVpcEndpointsRequest struct {
	QueryParams PostDeleteVpcEndpointsQueryParams
	Headers     PostDeleteVpcEndpointsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteVpcEndpointsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
