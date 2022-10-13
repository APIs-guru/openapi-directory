package operations

type PostCreateDefaultSubnetActionEnum string

const (
	PostCreateDefaultSubnetActionEnumCreateDefaultSubnet PostCreateDefaultSubnetActionEnum = "CreateDefaultSubnet"
)

type PostCreateDefaultSubnetVersionEnum string

const (
	PostCreateDefaultSubnetVersionEnumTwoThousandAndSixteen1115 PostCreateDefaultSubnetVersionEnum = "2016-11-15"
)

type PostCreateDefaultSubnetQueryParams struct {
	Action  PostCreateDefaultSubnetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDefaultSubnetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDefaultSubnetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDefaultSubnetRequest struct {
	QueryParams PostCreateDefaultSubnetQueryParams
	Headers     PostCreateDefaultSubnetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDefaultSubnetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
