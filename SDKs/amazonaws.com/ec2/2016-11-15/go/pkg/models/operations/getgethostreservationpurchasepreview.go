package operations

type GetGetHostReservationPurchasePreviewActionEnum string

const (
	GetGetHostReservationPurchasePreviewActionEnumGetHostReservationPurchasePreview GetGetHostReservationPurchasePreviewActionEnum = "GetHostReservationPurchasePreview"
)

type GetGetHostReservationPurchasePreviewVersionEnum string

const (
	GetGetHostReservationPurchasePreviewVersionEnumTwoThousandAndSixteen1115 GetGetHostReservationPurchasePreviewVersionEnum = "2016-11-15"
)

type GetGetHostReservationPurchasePreviewQueryParams struct {
	Action     GetGetHostReservationPurchasePreviewActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	HostIDSet  []string                                        `queryParam:"style=form,explode=true,name=HostIdSet"`
	OfferingID string                                          `queryParam:"style=form,explode=true,name=OfferingId"`
	Version    GetGetHostReservationPurchasePreviewVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetHostReservationPurchasePreviewHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetHostReservationPurchasePreviewRequest struct {
	QueryParams GetGetHostReservationPurchasePreviewQueryParams
	Headers     GetGetHostReservationPurchasePreviewHeaders
}

type GetGetHostReservationPurchasePreviewResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
