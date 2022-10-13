package operations

type GetDescribeWarmPoolActionEnum string

const (
	GetDescribeWarmPoolActionEnumDescribeWarmPool GetDescribeWarmPoolActionEnum = "DescribeWarmPool"
)

type GetDescribeWarmPoolVersionEnum string

const (
	GetDescribeWarmPoolVersionEnumTwoThousandAndEleven0101 GetDescribeWarmPoolVersionEnum = "2011-01-01"
)

type GetDescribeWarmPoolQueryParams struct {
	Action               GetDescribeWarmPoolActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                         `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	MaxRecords           *int64                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken            *string                        `queryParam:"style=form,explode=true,name=NextToken"`
	Version              GetDescribeWarmPoolVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeWarmPoolHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeWarmPoolRequest struct {
	QueryParams GetDescribeWarmPoolQueryParams
	Headers     GetDescribeWarmPoolHeaders
}

type GetDescribeWarmPoolResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
