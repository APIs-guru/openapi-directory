package operations

type PostModifyVpcEndpointActionEnum string

const (
	PostModifyVpcEndpointActionEnumModifyVpcEndpoint PostModifyVpcEndpointActionEnum = "ModifyVpcEndpoint"
)

type PostModifyVpcEndpointVersionEnum string

const (
	PostModifyVpcEndpointVersionEnumTwoThousandAndSixteen1115 PostModifyVpcEndpointVersionEnum = "2016-11-15"
)

type PostModifyVpcEndpointQueryParams struct {
	Action  PostModifyVpcEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpcEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpcEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyVpcEndpointRequest struct {
	QueryParams PostModifyVpcEndpointQueryParams
	Headers     PostModifyVpcEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpcEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
