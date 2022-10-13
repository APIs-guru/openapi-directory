package operations

type PostPurchaseHostReservationActionEnum string

const (
	PostPurchaseHostReservationActionEnumPurchaseHostReservation PostPurchaseHostReservationActionEnum = "PurchaseHostReservation"
)

type PostPurchaseHostReservationVersionEnum string

const (
	PostPurchaseHostReservationVersionEnumTwoThousandAndSixteen1115 PostPurchaseHostReservationVersionEnum = "2016-11-15"
)

type PostPurchaseHostReservationQueryParams struct {
	Action  PostPurchaseHostReservationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPurchaseHostReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPurchaseHostReservationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPurchaseHostReservationRequest struct {
	QueryParams PostPurchaseHostReservationQueryParams
	Headers     PostPurchaseHostReservationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPurchaseHostReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
