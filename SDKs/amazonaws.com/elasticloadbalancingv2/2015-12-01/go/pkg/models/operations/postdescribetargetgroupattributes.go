package operations

type PostDescribeTargetGroupAttributesActionEnum string

const (
	PostDescribeTargetGroupAttributesActionEnumDescribeTargetGroupAttributes PostDescribeTargetGroupAttributesActionEnum = "DescribeTargetGroupAttributes"
)

type PostDescribeTargetGroupAttributesVersionEnum string

const (
	PostDescribeTargetGroupAttributesVersionEnumTwoThousandAndFifteen1201 PostDescribeTargetGroupAttributesVersionEnum = "2015-12-01"
)

type PostDescribeTargetGroupAttributesQueryParams struct {
	Action  PostDescribeTargetGroupAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeTargetGroupAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTargetGroupAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeTargetGroupAttributesRequest struct {
	QueryParams PostDescribeTargetGroupAttributesQueryParams
	Headers     PostDescribeTargetGroupAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTargetGroupAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
