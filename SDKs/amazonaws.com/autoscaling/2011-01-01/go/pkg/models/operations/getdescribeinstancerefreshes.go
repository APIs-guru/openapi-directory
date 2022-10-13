package operations

type GetDescribeInstanceRefreshesActionEnum string

const (
	GetDescribeInstanceRefreshesActionEnumDescribeInstanceRefreshes GetDescribeInstanceRefreshesActionEnum = "DescribeInstanceRefreshes"
)

type GetDescribeInstanceRefreshesVersionEnum string

const (
	GetDescribeInstanceRefreshesVersionEnumTwoThousandAndEleven0101 GetDescribeInstanceRefreshesVersionEnum = "2011-01-01"
)

type GetDescribeInstanceRefreshesQueryParams struct {
	Action               GetDescribeInstanceRefreshesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                  `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	InstanceRefreshIds   []string                                `queryParam:"style=form,explode=true,name=InstanceRefreshIds"`
	MaxRecords           *int64                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken            *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version              GetDescribeInstanceRefreshesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeInstanceRefreshesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeInstanceRefreshesRequest struct {
	QueryParams GetDescribeInstanceRefreshesQueryParams
	Headers     GetDescribeInstanceRefreshesHeaders
}

type GetDescribeInstanceRefreshesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
