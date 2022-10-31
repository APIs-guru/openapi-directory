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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
