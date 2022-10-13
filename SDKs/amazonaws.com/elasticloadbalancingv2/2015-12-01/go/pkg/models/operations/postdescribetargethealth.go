package operations

type PostDescribeTargetHealthActionEnum string

const (
	PostDescribeTargetHealthActionEnumDescribeTargetHealth PostDescribeTargetHealthActionEnum = "DescribeTargetHealth"
)

type PostDescribeTargetHealthVersionEnum string

const (
	PostDescribeTargetHealthVersionEnumTwoThousandAndFifteen1201 PostDescribeTargetHealthVersionEnum = "2015-12-01"
)

type PostDescribeTargetHealthQueryParams struct {
	Action  PostDescribeTargetHealthActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeTargetHealthVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTargetHealthHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeTargetHealthRequest struct {
	QueryParams PostDescribeTargetHealthQueryParams
	Headers     PostDescribeTargetHealthHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTargetHealthResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
