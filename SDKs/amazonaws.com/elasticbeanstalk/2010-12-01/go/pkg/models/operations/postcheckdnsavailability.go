package operations

type PostCheckDNSAvailabilityActionEnum string

const (
	PostCheckDNSAvailabilityActionEnumCheckDNSAvailability PostCheckDNSAvailabilityActionEnum = "CheckDNSAvailability"
)

type PostCheckDNSAvailabilityVersionEnum string

const (
	PostCheckDNSAvailabilityVersionEnumTwoThousandAndTen1201 PostCheckDNSAvailabilityVersionEnum = "2010-12-01"
)

type PostCheckDNSAvailabilityQueryParams struct {
	Action  PostCheckDNSAvailabilityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCheckDNSAvailabilityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCheckDNSAvailabilityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCheckDNSAvailabilityRequest struct {
	QueryParams PostCheckDNSAvailabilityQueryParams
	Headers     PostCheckDNSAvailabilityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCheckDNSAvailabilityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
