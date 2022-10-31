package operations

type PostCreateVpcActionEnum string

const (
	PostCreateVpcActionEnumCreateVpc PostCreateVpcActionEnum = "CreateVpc"
)

type PostCreateVpcVersionEnum string

const (
	PostCreateVpcVersionEnumTwoThousandAndSixteen1115 PostCreateVpcVersionEnum = "2016-11-15"
)

type PostCreateVpcQueryParams struct {
	Action  PostCreateVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateVpcHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateVpcRequest struct {
	QueryParams PostCreateVpcQueryParams
	Headers     PostCreateVpcHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateVpcResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
