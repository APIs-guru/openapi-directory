package operations

import (
	"openapi/pkg/models/shared"
)

type ListLocationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLocationsXAmzTargetEnum string

const (
	ListLocationsXAmzTargetEnumFmrsServiceListLocations ListLocationsXAmzTargetEnum = "FmrsService.ListLocations"
)

type ListLocationsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLocationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLocationsRequest struct {
	QueryParams ListLocationsQueryParams
	Headers     ListLocationsHeaders
	Request     shared.ListLocationsRequest `request:"mediaType=application/json"`
}

type ListLocationsResponse struct {
	ContentType             string
	InternalException       *interface{}
	InvalidRequestException *interface{}
	ListLocationsResponse   *shared.ListLocationsResponse
	StatusCode              int64
}
