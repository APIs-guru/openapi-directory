package operations

type PostDescribeScheduledInstanceAvailabilityActionEnum string

const (
	PostDescribeScheduledInstanceAvailabilityActionEnumDescribeScheduledInstanceAvailability PostDescribeScheduledInstanceAvailabilityActionEnum = "DescribeScheduledInstanceAvailability"
)

type PostDescribeScheduledInstanceAvailabilityVersionEnum string

const (
	PostDescribeScheduledInstanceAvailabilityVersionEnumTwoThousandAndSixteen1115 PostDescribeScheduledInstanceAvailabilityVersionEnum = "2016-11-15"
)

type PostDescribeScheduledInstanceAvailabilityQueryParams struct {
	Action     PostDescribeScheduledInstanceAvailabilityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                              `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                              `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeScheduledInstanceAvailabilityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeScheduledInstanceAvailabilityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeScheduledInstanceAvailabilityRequest struct {
	QueryParams PostDescribeScheduledInstanceAvailabilityQueryParams
	Headers     PostDescribeScheduledInstanceAvailabilityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeScheduledInstanceAvailabilityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
