package operations

type PostUpdateAvailabilityOptionsActionEnum string

const (
	PostUpdateAvailabilityOptionsActionEnumUpdateAvailabilityOptions PostUpdateAvailabilityOptionsActionEnum = "UpdateAvailabilityOptions"
)

type PostUpdateAvailabilityOptionsVersionEnum string

const (
	PostUpdateAvailabilityOptionsVersionEnumTwoThousandAndThirteen0101 PostUpdateAvailabilityOptionsVersionEnum = "2013-01-01"
)

type PostUpdateAvailabilityOptionsQueryParams struct {
	Action  PostUpdateAvailabilityOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateAvailabilityOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateAvailabilityOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateAvailabilityOptionsRequest struct {
	QueryParams PostUpdateAvailabilityOptionsQueryParams
	Headers     PostUpdateAvailabilityOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateAvailabilityOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
