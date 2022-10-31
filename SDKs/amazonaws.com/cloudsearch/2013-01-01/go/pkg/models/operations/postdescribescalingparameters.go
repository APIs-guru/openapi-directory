package operations

type PostDescribeScalingParametersActionEnum string

const (
	PostDescribeScalingParametersActionEnumDescribeScalingParameters PostDescribeScalingParametersActionEnum = "DescribeScalingParameters"
)

type PostDescribeScalingParametersVersionEnum string

const (
	PostDescribeScalingParametersVersionEnumTwoThousandAndThirteen0101 PostDescribeScalingParametersVersionEnum = "2013-01-01"
)

type PostDescribeScalingParametersQueryParams struct {
	Action  PostDescribeScalingParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeScalingParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeScalingParametersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeScalingParametersRequest struct {
	QueryParams PostDescribeScalingParametersQueryParams
	Headers     PostDescribeScalingParametersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeScalingParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
