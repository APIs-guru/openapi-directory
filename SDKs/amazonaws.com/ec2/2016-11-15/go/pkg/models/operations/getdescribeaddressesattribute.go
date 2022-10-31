package operations

type GetDescribeAddressesAttributeActionEnum string

const (
	GetDescribeAddressesAttributeActionEnumDescribeAddressesAttribute GetDescribeAddressesAttributeActionEnum = "DescribeAddressesAttribute"
)

type GetDescribeAddressesAttributeAttributeEnum string

const (
	GetDescribeAddressesAttributeAttributeEnumDomainName GetDescribeAddressesAttributeAttributeEnum = "domain-name"
)

type GetDescribeAddressesAttributeVersionEnum string

const (
	GetDescribeAddressesAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeAddressesAttributeVersionEnum = "2016-11-15"
)

type GetDescribeAddressesAttributeQueryParams struct {
	Action       GetDescribeAddressesAttributeActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	AllocationID []string                                    `queryParam:"style=form,explode=true,name=AllocationId"`
	Attribute    *GetDescribeAddressesAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun       *bool                                       `queryParam:"style=form,explode=true,name=DryRun"`
	MaxResults   *int64                                      `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken    *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version      GetDescribeAddressesAttributeVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAddressesAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeAddressesAttributeRequest struct {
	QueryParams GetDescribeAddressesAttributeQueryParams
	Headers     GetDescribeAddressesAttributeHeaders
}

type GetDescribeAddressesAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
