package operations

type GetDescribeScalingProcessTypesActionEnum string

const (
	GetDescribeScalingProcessTypesActionEnumDescribeScalingProcessTypes GetDescribeScalingProcessTypesActionEnum = "DescribeScalingProcessTypes"
)

type GetDescribeScalingProcessTypesVersionEnum string

const (
	GetDescribeScalingProcessTypesVersionEnumTwoThousandAndEleven0101 GetDescribeScalingProcessTypesVersionEnum = "2011-01-01"
)

type GetDescribeScalingProcessTypesQueryParams struct {
	Action  GetDescribeScalingProcessTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDescribeScalingProcessTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeScalingProcessTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeScalingProcessTypesRequest struct {
	QueryParams GetDescribeScalingProcessTypesQueryParams
	Headers     GetDescribeScalingProcessTypesHeaders
}

type GetDescribeScalingProcessTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
