package operations

type PostDescribeImagesActionEnum string

const (
	PostDescribeImagesActionEnumDescribeImages PostDescribeImagesActionEnum = "DescribeImages"
)

type PostDescribeImagesVersionEnum string

const (
	PostDescribeImagesVersionEnumTwoThousandAndSixteen1115 PostDescribeImagesVersionEnum = "2016-11-15"
)

type PostDescribeImagesQueryParams struct {
	Action  PostDescribeImagesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeImagesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeImagesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeImagesRequest struct {
	QueryParams PostDescribeImagesQueryParams
	Headers     PostDescribeImagesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeImagesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
