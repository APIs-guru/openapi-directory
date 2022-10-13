package operations

type PostDescribeImageAttributeActionEnum string

const (
	PostDescribeImageAttributeActionEnumDescribeImageAttribute PostDescribeImageAttributeActionEnum = "DescribeImageAttribute"
)

type PostDescribeImageAttributeVersionEnum string

const (
	PostDescribeImageAttributeVersionEnumTwoThousandAndSixteen1115 PostDescribeImageAttributeVersionEnum = "2016-11-15"
)

type PostDescribeImageAttributeQueryParams struct {
	Action  PostDescribeImageAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeImageAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeImageAttributeRequest struct {
	QueryParams PostDescribeImageAttributeQueryParams
	Headers     PostDescribeImageAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeImageAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
