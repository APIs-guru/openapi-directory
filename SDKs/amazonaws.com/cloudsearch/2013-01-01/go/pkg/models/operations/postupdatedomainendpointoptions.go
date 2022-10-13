package operations

type PostUpdateDomainEndpointOptionsActionEnum string

const (
	PostUpdateDomainEndpointOptionsActionEnumUpdateDomainEndpointOptions PostUpdateDomainEndpointOptionsActionEnum = "UpdateDomainEndpointOptions"
)

type PostUpdateDomainEndpointOptionsVersionEnum string

const (
	PostUpdateDomainEndpointOptionsVersionEnumTwoThousandAndThirteen0101 PostUpdateDomainEndpointOptionsVersionEnum = "2013-01-01"
)

type PostUpdateDomainEndpointOptionsQueryParams struct {
	Action  PostUpdateDomainEndpointOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateDomainEndpointOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateDomainEndpointOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateDomainEndpointOptionsRequest struct {
	QueryParams PostUpdateDomainEndpointOptionsQueryParams
	Headers     PostUpdateDomainEndpointOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateDomainEndpointOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
