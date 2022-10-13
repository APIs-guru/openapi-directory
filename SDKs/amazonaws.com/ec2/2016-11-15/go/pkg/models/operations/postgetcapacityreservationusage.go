package operations

type PostGetCapacityReservationUsageActionEnum string

const (
	PostGetCapacityReservationUsageActionEnumGetCapacityReservationUsage PostGetCapacityReservationUsageActionEnum = "GetCapacityReservationUsage"
)

type PostGetCapacityReservationUsageVersionEnum string

const (
	PostGetCapacityReservationUsageVersionEnumTwoThousandAndSixteen1115 PostGetCapacityReservationUsageVersionEnum = "2016-11-15"
)

type PostGetCapacityReservationUsageQueryParams struct {
	Action  PostGetCapacityReservationUsageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetCapacityReservationUsageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetCapacityReservationUsageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetCapacityReservationUsageRequest struct {
	QueryParams PostGetCapacityReservationUsageQueryParams
	Headers     PostGetCapacityReservationUsageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetCapacityReservationUsageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
