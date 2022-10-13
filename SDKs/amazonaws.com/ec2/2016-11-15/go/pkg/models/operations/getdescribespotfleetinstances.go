package operations

type GetDescribeSpotFleetInstancesActionEnum string

const (
	GetDescribeSpotFleetInstancesActionEnumDescribeSpotFleetInstances GetDescribeSpotFleetInstancesActionEnum = "DescribeSpotFleetInstances"
)

type GetDescribeSpotFleetInstancesVersionEnum string

const (
	GetDescribeSpotFleetInstancesVersionEnumTwoThousandAndSixteen1115 GetDescribeSpotFleetInstancesVersionEnum = "2016-11-15"
)

type GetDescribeSpotFleetInstancesQueryParams struct {
	Action             GetDescribeSpotFleetInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun             *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	MaxResults         *int64                                   `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken          *string                                  `queryParam:"style=form,explode=true,name=NextToken"`
	SpotFleetRequestID string                                   `queryParam:"style=form,explode=true,name=SpotFleetRequestId"`
	Version            GetDescribeSpotFleetInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeSpotFleetInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeSpotFleetInstancesRequest struct {
	QueryParams GetDescribeSpotFleetInstancesQueryParams
	Headers     GetDescribeSpotFleetInstancesHeaders
}

type GetDescribeSpotFleetInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
