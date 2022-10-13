package operations

type GetCancelReservedInstancesListingActionEnum string

const (
	GetCancelReservedInstancesListingActionEnumCancelReservedInstancesListing GetCancelReservedInstancesListingActionEnum = "CancelReservedInstancesListing"
)

type GetCancelReservedInstancesListingVersionEnum string

const (
	GetCancelReservedInstancesListingVersionEnumTwoThousandAndSixteen1115 GetCancelReservedInstancesListingVersionEnum = "2016-11-15"
)

type GetCancelReservedInstancesListingQueryParams struct {
	Action                     GetCancelReservedInstancesListingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ReservedInstancesListingID string                                       `queryParam:"style=form,explode=true,name=ReservedInstancesListingId"`
	Version                    GetCancelReservedInstancesListingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelReservedInstancesListingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCancelReservedInstancesListingRequest struct {
	QueryParams GetCancelReservedInstancesListingQueryParams
	Headers     GetCancelReservedInstancesListingHeaders
}

type GetCancelReservedInstancesListingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
