package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPurchaseReservedInstancesOfferingActionEnum string

const (
	GetPurchaseReservedInstancesOfferingActionEnumPurchaseReservedInstancesOffering GetPurchaseReservedInstancesOfferingActionEnum = "PurchaseReservedInstancesOffering"
)

type GetPurchaseReservedInstancesOfferingLimitPrice struct {
	Amount       *float64                       `queryParam:"name=Amount"`
	CurrencyCode *shared.CurrencyCodeValuesEnum `queryParam:"name=CurrencyCode"`
}

type GetPurchaseReservedInstancesOfferingVersionEnum string

const (
	GetPurchaseReservedInstancesOfferingVersionEnumTwoThousandAndSixteen1115 GetPurchaseReservedInstancesOfferingVersionEnum = "2016-11-15"
)

type GetPurchaseReservedInstancesOfferingQueryParams struct {
	Action                      GetPurchaseReservedInstancesOfferingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                      *bool                                           `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceCount               int64                                           `queryParam:"style=form,explode=true,name=InstanceCount"`
	LimitPrice                  *GetPurchaseReservedInstancesOfferingLimitPrice `queryParam:"style=form,explode=true,name=LimitPrice"`
	PurchaseTime                *time.Time                                      `queryParam:"style=form,explode=true,name=PurchaseTime"`
	ReservedInstancesOfferingID string                                          `queryParam:"style=form,explode=true,name=ReservedInstancesOfferingId"`
	Version                     GetPurchaseReservedInstancesOfferingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPurchaseReservedInstancesOfferingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetPurchaseReservedInstancesOfferingRequest struct {
	QueryParams GetPurchaseReservedInstancesOfferingQueryParams
	Headers     GetPurchaseReservedInstancesOfferingHeaders
}

type GetPurchaseReservedInstancesOfferingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
