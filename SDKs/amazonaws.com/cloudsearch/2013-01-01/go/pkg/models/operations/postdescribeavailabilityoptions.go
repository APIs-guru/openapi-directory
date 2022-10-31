package operations

type PostDescribeAvailabilityOptionsActionEnum string

const (
	PostDescribeAvailabilityOptionsActionEnumDescribeAvailabilityOptions PostDescribeAvailabilityOptionsActionEnum = "DescribeAvailabilityOptions"
)

type PostDescribeAvailabilityOptionsVersionEnum string

const (
	PostDescribeAvailabilityOptionsVersionEnumTwoThousandAndThirteen0101 PostDescribeAvailabilityOptionsVersionEnum = "2013-01-01"
)

type PostDescribeAvailabilityOptionsQueryParams struct {
	Action  PostDescribeAvailabilityOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAvailabilityOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAvailabilityOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeAvailabilityOptionsRequest struct {
	QueryParams PostDescribeAvailabilityOptionsQueryParams
	Headers     PostDescribeAvailabilityOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAvailabilityOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
