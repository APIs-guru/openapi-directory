package operations

type GetUpdateAvailabilityOptionsActionEnum string

const (
	GetUpdateAvailabilityOptionsActionEnumUpdateAvailabilityOptions GetUpdateAvailabilityOptionsActionEnum = "UpdateAvailabilityOptions"
)

type GetUpdateAvailabilityOptionsVersionEnum string

const (
	GetUpdateAvailabilityOptionsVersionEnumTwoThousandAndThirteen0101 GetUpdateAvailabilityOptionsVersionEnum = "2013-01-01"
)

type GetUpdateAvailabilityOptionsQueryParams struct {
	Action     GetUpdateAvailabilityOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                                  `queryParam:"style=form,explode=true,name=DomainName"`
	MultiAz    bool                                    `queryParam:"style=form,explode=true,name=MultiAZ"`
	Version    GetUpdateAvailabilityOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateAvailabilityOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateAvailabilityOptionsRequest struct {
	QueryParams GetUpdateAvailabilityOptionsQueryParams
	Headers     GetUpdateAvailabilityOptionsHeaders
}

type GetUpdateAvailabilityOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
