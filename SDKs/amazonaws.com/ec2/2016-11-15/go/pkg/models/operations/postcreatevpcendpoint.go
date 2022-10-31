package operations

type PostCreateVpcEndpointActionEnum string

const (
	PostCreateVpcEndpointActionEnumCreateVpcEndpoint PostCreateVpcEndpointActionEnum = "CreateVpcEndpoint"
)

type PostCreateVpcEndpointVersionEnum string

const (
	PostCreateVpcEndpointVersionEnumTwoThousandAndSixteen1115 PostCreateVpcEndpointVersionEnum = "2016-11-15"
)

type PostCreateVpcEndpointQueryParams struct {
	Action  PostCreateVpcEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateVpcEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateVpcEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateVpcEndpointRequest struct {
	QueryParams PostCreateVpcEndpointQueryParams
	Headers     PostCreateVpcEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateVpcEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
