package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type VouchersGetDeletedEnum string

const (
	VouchersGetDeletedEnumNotDeleted VouchersGetDeletedEnum = "NotDeleted"
	VouchersGetDeletedEnumDeleted    VouchersGetDeletedEnum = "Deleted"
	VouchersGetDeletedEnumAll        VouchersGetDeletedEnum = "All"
)

type VouchersGetTypeEnum string

const (
	VouchersGetTypeEnumCommercial    VouchersGetTypeEnum = "Commercial"
	VouchersGetTypeEnumInternal      VouchersGetTypeEnum = "Internal"
	VouchersGetTypeEnumTemporary     VouchersGetTypeEnum = "Temporary"
	VouchersGetTypeEnumRightToRepair VouchersGetTypeEnum = "RightToRepair"
)

type VouchersGetQueryParams struct {
	CreatedAfter     *time.Time              `queryParam:"style=form,explode=true,name=CreatedAfter"`
	CreatedBefore    *time.Time              `queryParam:"style=form,explode=true,name=CreatedBefore"`
	DealerCode       *string                 `queryParam:"style=form,explode=true,name=DealerCode"`
	Deleted          *VouchersGetDeletedEnum `queryParam:"style=form,explode=true,name=Deleted"`
	Email            *string                 `queryParam:"style=form,explode=true,name=Email"`
	ExpirationAfter  *time.Time              `queryParam:"style=form,explode=true,name=ExpirationAfter"`
	ExpirationBefore *time.Time              `queryParam:"style=form,explode=true,name=ExpirationBefore"`
	LicenseTo        *string                 `queryParam:"style=form,explode=true,name=LicenseTo"`
	ModifiedBy       *string                 `queryParam:"style=form,explode=true,name=ModifiedBy"`
	OrderNumber      *string                 `queryParam:"style=form,explode=true,name=OrderNumber"`
	Punched          *bool                   `queryParam:"style=form,explode=true,name=Punched"`
	PunchedAfter     *time.Time              `queryParam:"style=form,explode=true,name=PunchedAfter"`
	PunchedBefore    *time.Time              `queryParam:"style=form,explode=true,name=PunchedBefore"`
	Purpose          *string                 `queryParam:"style=form,explode=true,name=Purpose"`
	Type             *VouchersGetTypeEnum    `queryParam:"style=form,explode=true,name=Type"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	Offset           *int32                  `queryParam:"style=form,explode=true,name=offset"`
}

type VouchersGetRequest struct {
	QueryParams VouchersGetQueryParams
}

type VouchersGetResponse struct {
	APIPagedResponseDealerDbModelsVoucher *shared.APIPagedResponseDealerDbModelsVoucher
	ContentType                           string
	StatusCode                            int64
}
