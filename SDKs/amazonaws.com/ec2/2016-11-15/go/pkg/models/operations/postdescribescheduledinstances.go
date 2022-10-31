package operations

type PostDescribeScheduledInstancesActionEnum string

const (
	PostDescribeScheduledInstancesActionEnumDescribeScheduledInstances PostDescribeScheduledInstancesActionEnum = "DescribeScheduledInstances"
)

type PostDescribeScheduledInstancesVersionEnum string

const (
	PostDescribeScheduledInstancesVersionEnumTwoThousandAndSixteen1115 PostDescribeScheduledInstancesVersionEnum = "2016-11-15"
)

type PostDescribeScheduledInstancesQueryParams struct {
	Action     PostDescribeScheduledInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                   `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                   `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeScheduledInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeScheduledInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeScheduledInstancesRequest struct {
	QueryParams PostDescribeScheduledInstancesQueryParams
	Headers     PostDescribeScheduledInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeScheduledInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
