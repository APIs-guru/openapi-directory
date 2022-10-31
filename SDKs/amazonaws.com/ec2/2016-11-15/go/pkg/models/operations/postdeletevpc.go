package operations

type PostDeleteVpcActionEnum string

const (
	PostDeleteVpcActionEnumDeleteVpc PostDeleteVpcActionEnum = "DeleteVpc"
)

type PostDeleteVpcVersionEnum string

const (
	PostDeleteVpcVersionEnumTwoThousandAndSixteen1115 PostDeleteVpcVersionEnum = "2016-11-15"
)

type PostDeleteVpcQueryParams struct {
	Action  PostDeleteVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteVpcHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteVpcRequest struct {
	QueryParams PostDeleteVpcQueryParams
	Headers     PostDeleteVpcHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteVpcResponse struct {
	ContentType string
	StatusCode  int64
}
