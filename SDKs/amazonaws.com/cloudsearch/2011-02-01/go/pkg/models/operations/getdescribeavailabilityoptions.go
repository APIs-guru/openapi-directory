package operations

type GetDescribeAvailabilityOptionsActionEnum string

const (
	GetDescribeAvailabilityOptionsActionEnumDescribeAvailabilityOptions GetDescribeAvailabilityOptionsActionEnum = "DescribeAvailabilityOptions"
)

type GetDescribeAvailabilityOptionsVersionEnum string

const (
	GetDescribeAvailabilityOptionsVersionEnumTwoThousandAndEleven0201 GetDescribeAvailabilityOptionsVersionEnum = "2011-02-01"
)

type GetDescribeAvailabilityOptionsQueryParams struct {
	Action     GetDescribeAvailabilityOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                                    `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetDescribeAvailabilityOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAvailabilityOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
