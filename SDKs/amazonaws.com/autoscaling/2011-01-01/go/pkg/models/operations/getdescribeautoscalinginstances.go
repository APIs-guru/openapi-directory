package operations

type GetDescribeAutoScalingInstancesActionEnum string

const (
	GetDescribeAutoScalingInstancesActionEnumDescribeAutoScalingInstances GetDescribeAutoScalingInstancesActionEnum = "DescribeAutoScalingInstances"
)

type GetDescribeAutoScalingInstancesVersionEnum string

const (
	GetDescribeAutoScalingInstancesVersionEnumTwoThousandAndEleven0101 GetDescribeAutoScalingInstancesVersionEnum = "2011-01-01"
)

type GetDescribeAutoScalingInstancesQueryParams struct {
	Action      GetDescribeAutoScalingInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	InstanceIds []string                                   `queryParam:"style=form,explode=true,name=InstanceIds"`
	MaxRecords  *int64                                     `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken   *string                                    `queryParam:"style=form,explode=true,name=NextToken"`
	Version     GetDescribeAutoScalingInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAutoScalingInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeAutoScalingInstancesRequest struct {
	QueryParams GetDescribeAutoScalingInstancesQueryParams
	Headers     GetDescribeAutoScalingInstancesHeaders
}

type GetDescribeAutoScalingInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
