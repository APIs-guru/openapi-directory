package operations

import (
	"openapi/pkg/models/shared"
)

type ListOfferingPromotionsXAmzTargetEnum string

const (
	ListOfferingPromotionsXAmzTargetEnumDeviceFarm20150623ListOfferingPromotions ListOfferingPromotionsXAmzTargetEnum = "DeviceFarm_20150623.ListOfferingPromotions"
)

type ListOfferingPromotionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOfferingPromotionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListOfferingPromotionsRequest struct {
	Headers ListOfferingPromotionsHeaders
	Request shared.ListOfferingPromotionsRequest `request:"mediaType=application/json"`
}

type ListOfferingPromotionsResponse struct {
	ArgumentException            *interface{}
	ContentType                  string
	LimitExceededException       *interface{}
	ListOfferingPromotionsResult *shared.ListOfferingPromotionsResult
	NotEligibleException         *interface{}
	NotFoundException            *interface{}
	ServiceAccountException      *interface{}
	StatusCode                   int64
}
