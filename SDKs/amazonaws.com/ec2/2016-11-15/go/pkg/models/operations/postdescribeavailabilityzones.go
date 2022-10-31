package operations

type PostDescribeAvailabilityZonesActionEnum string

const (
	PostDescribeAvailabilityZonesActionEnumDescribeAvailabilityZones PostDescribeAvailabilityZonesActionEnum = "DescribeAvailabilityZones"
)

type PostDescribeAvailabilityZonesVersionEnum string

const (
	PostDescribeAvailabilityZonesVersionEnumTwoThousandAndSixteen1115 PostDescribeAvailabilityZonesVersionEnum = "2016-11-15"
)

type PostDescribeAvailabilityZonesQueryParams struct {
	Action  PostDescribeAvailabilityZonesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAvailabilityZonesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAvailabilityZonesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeAvailabilityZonesRequest struct {
	QueryParams PostDescribeAvailabilityZonesQueryParams
	Headers     PostDescribeAvailabilityZonesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAvailabilityZonesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
