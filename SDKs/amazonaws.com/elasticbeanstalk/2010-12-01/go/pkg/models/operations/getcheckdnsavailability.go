package operations

type GetCheckDNSAvailabilityActionEnum string

const (
	GetCheckDNSAvailabilityActionEnumCheckDNSAvailability GetCheckDNSAvailabilityActionEnum = "CheckDNSAvailability"
)

type GetCheckDNSAvailabilityVersionEnum string

const (
	GetCheckDNSAvailabilityVersionEnumTwoThousandAndTen1201 GetCheckDNSAvailabilityVersionEnum = "2010-12-01"
)

type GetCheckDNSAvailabilityQueryParams struct {
	Action      GetCheckDNSAvailabilityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CnamePrefix string                             `queryParam:"style=form,explode=true,name=CNAMEPrefix"`
	Version     GetCheckDNSAvailabilityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCheckDNSAvailabilityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCheckDNSAvailabilityRequest struct {
	QueryParams GetCheckDNSAvailabilityQueryParams
	Headers     GetCheckDNSAvailabilityHeaders
}

type GetCheckDNSAvailabilityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
