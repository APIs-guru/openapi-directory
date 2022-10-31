package operations

import (
	"openapi/pkg/models/shared"
)

type PurchaseOfferingXAmzTargetEnum string

const (
	PurchaseOfferingXAmzTargetEnumDeviceFarm20150623PurchaseOffering PurchaseOfferingXAmzTargetEnum = "DeviceFarm_20150623.PurchaseOffering"
)

type PurchaseOfferingHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PurchaseOfferingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PurchaseOfferingRequest struct {
	Headers PurchaseOfferingHeaders
	Request shared.PurchaseOfferingRequest `request:"mediaType=application/json"`
}

type PurchaseOfferingResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	NotEligibleException    *interface{}
	NotFoundException       *interface{}
	PurchaseOfferingResult  *shared.PurchaseOfferingResult
	ServiceAccountException *interface{}
	StatusCode              int64
}
