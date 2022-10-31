package operations

type GetDescribeAvailabilityOptionsActionEnum string

const (
	GetDescribeAvailabilityOptionsActionEnumDescribeAvailabilityOptions GetDescribeAvailabilityOptionsActionEnum = "DescribeAvailabilityOptions"
)

type GetDescribeAvailabilityOptionsVersionEnum string

const (
	GetDescribeAvailabilityOptionsVersionEnumTwoThousandAndThirteen0101 GetDescribeAvailabilityOptionsVersionEnum = "2013-01-01"
)

type GetDescribeAvailabilityOptionsQueryParams struct {
	Action     GetDescribeAvailabilityOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Deployed   *bool                                     `queryParam:"style=form,explode=true,name=Deployed"`
	DomainName string                                    `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetDescribeAvailabilityOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAvailabilityOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeAvailabilityOptionsRequest struct {
	QueryParams GetDescribeAvailabilityOptionsQueryParams
	Headers     GetDescribeAvailabilityOptionsHeaders
}

type GetDescribeAvailabilityOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
