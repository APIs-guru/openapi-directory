package operations

type GetDescribeScalingParametersActionEnum string

const (
	GetDescribeScalingParametersActionEnumDescribeScalingParameters GetDescribeScalingParametersActionEnum = "DescribeScalingParameters"
)

type GetDescribeScalingParametersVersionEnum string

const (
	GetDescribeScalingParametersVersionEnumTwoThousandAndThirteen0101 GetDescribeScalingParametersVersionEnum = "2013-01-01"
)

type GetDescribeScalingParametersQueryParams struct {
	Action     GetDescribeScalingParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                                  `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetDescribeScalingParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeScalingParametersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeScalingParametersRequest struct {
	QueryParams GetDescribeScalingParametersQueryParams
	Headers     GetDescribeScalingParametersHeaders
}

type GetDescribeScalingParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
