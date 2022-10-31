package operations

type PostCreateDefaultVpcActionEnum string

const (
	PostCreateDefaultVpcActionEnumCreateDefaultVpc PostCreateDefaultVpcActionEnum = "CreateDefaultVpc"
)

type PostCreateDefaultVpcVersionEnum string

const (
	PostCreateDefaultVpcVersionEnumTwoThousandAndSixteen1115 PostCreateDefaultVpcVersionEnum = "2016-11-15"
)

type PostCreateDefaultVpcQueryParams struct {
	Action  PostCreateDefaultVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDefaultVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDefaultVpcHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateDefaultVpcRequest struct {
	QueryParams PostCreateDefaultVpcQueryParams
	Headers     PostCreateDefaultVpcHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDefaultVpcResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
