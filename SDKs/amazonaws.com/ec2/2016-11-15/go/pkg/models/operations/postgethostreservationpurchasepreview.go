package operations

type PostGetHostReservationPurchasePreviewActionEnum string

const (
	PostGetHostReservationPurchasePreviewActionEnumGetHostReservationPurchasePreview PostGetHostReservationPurchasePreviewActionEnum = "GetHostReservationPurchasePreview"
)

type PostGetHostReservationPurchasePreviewVersionEnum string

const (
	PostGetHostReservationPurchasePreviewVersionEnumTwoThousandAndSixteen1115 PostGetHostReservationPurchasePreviewVersionEnum = "2016-11-15"
)

type PostGetHostReservationPurchasePreviewQueryParams struct {
	Action  PostGetHostReservationPurchasePreviewActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetHostReservationPurchasePreviewVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetHostReservationPurchasePreviewHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetHostReservationPurchasePreviewRequest struct {
	QueryParams PostGetHostReservationPurchasePreviewQueryParams
	Headers     PostGetHostReservationPurchasePreviewHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetHostReservationPurchasePreviewResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
