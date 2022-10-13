package operations

type GetDescribeDomainEndpointOptionsActionEnum string

const (
	GetDescribeDomainEndpointOptionsActionEnumDescribeDomainEndpointOptions GetDescribeDomainEndpointOptionsActionEnum = "DescribeDomainEndpointOptions"
)

type GetDescribeDomainEndpointOptionsVersionEnum string

const (
	GetDescribeDomainEndpointOptionsVersionEnumTwoThousandAndThirteen0101 GetDescribeDomainEndpointOptionsVersionEnum = "2013-01-01"
)

type GetDescribeDomainEndpointOptionsQueryParams struct {
	Action     GetDescribeDomainEndpointOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Deployed   *bool                                       `queryParam:"style=form,explode=true,name=Deployed"`
	DomainName string                                      `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetDescribeDomainEndpointOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDomainEndpointOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDomainEndpointOptionsRequest struct {
	QueryParams GetDescribeDomainEndpointOptionsQueryParams
	Headers     GetDescribeDomainEndpointOptionsHeaders
}

type GetDescribeDomainEndpointOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
