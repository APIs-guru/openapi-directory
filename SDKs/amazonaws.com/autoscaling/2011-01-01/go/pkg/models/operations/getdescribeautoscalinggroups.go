package operations

type GetDescribeAutoScalingGroupsActionEnum string

const (
	GetDescribeAutoScalingGroupsActionEnumDescribeAutoScalingGroups GetDescribeAutoScalingGroupsActionEnum = "DescribeAutoScalingGroups"
)

type GetDescribeAutoScalingGroupsVersionEnum string

const (
	GetDescribeAutoScalingGroupsVersionEnumTwoThousandAndEleven0101 GetDescribeAutoScalingGroupsVersionEnum = "2011-01-01"
)

type GetDescribeAutoScalingGroupsQueryParams struct {
	Action                GetDescribeAutoScalingGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupNames []string                                `queryParam:"style=form,explode=true,name=AutoScalingGroupNames"`
	MaxRecords            *int64                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken             *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version               GetDescribeAutoScalingGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAutoScalingGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeAutoScalingGroupsRequest struct {
	QueryParams GetDescribeAutoScalingGroupsQueryParams
	Headers     GetDescribeAutoScalingGroupsHeaders
}

type GetDescribeAutoScalingGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
