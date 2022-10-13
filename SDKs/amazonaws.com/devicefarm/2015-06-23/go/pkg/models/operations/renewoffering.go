package operations

import (
	"openapi/pkg/models/shared"
)

type RenewOfferingXAmzTargetEnum string

const (
	RenewOfferingXAmzTargetEnumDeviceFarm20150623RenewOffering RenewOfferingXAmzTargetEnum = "DeviceFarm_20150623.RenewOffering"
)

type RenewOfferingHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RenewOfferingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RenewOfferingRequest struct {
	Headers RenewOfferingHeaders
	Request shared.RenewOfferingRequest `request:"mediaType=application/json"`
}

type RenewOfferingResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	NotEligibleException    *interface{}
	NotFoundException       *interface{}
	RenewOfferingResult     *shared.RenewOfferingResult
	ServiceAccountException *interface{}
	StatusCode              int64
}
