package operations

import (
	"openapi/pkg/models/shared"
)

type ListOfferingsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListOfferingsXAmzTargetEnum string

const (
	ListOfferingsXAmzTargetEnumDeviceFarm20150623ListOfferings ListOfferingsXAmzTargetEnum = "DeviceFarm_20150623.ListOfferings"
)

type ListOfferingsHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOfferingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListOfferingsRequest struct {
	QueryParams ListOfferingsQueryParams
	Headers     ListOfferingsHeaders
	Request     shared.ListOfferingsRequest `request:"mediaType=application/json"`
}

type ListOfferingsResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	ListOfferingsResult     *shared.ListOfferingsResult
	NotEligibleException    *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
