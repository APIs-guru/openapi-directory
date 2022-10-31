package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePendingAggregationRequestXAmzTargetEnum string

const (
	DeletePendingAggregationRequestXAmzTargetEnumStarlingDoveServiceDeletePendingAggregationRequest DeletePendingAggregationRequestXAmzTargetEnum = "StarlingDoveService.DeletePendingAggregationRequest"
)

type DeletePendingAggregationRequestHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePendingAggregationRequestXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeletePendingAggregationRequestRequest struct {
	Headers DeletePendingAggregationRequestHeaders
	Request shared.DeletePendingAggregationRequestRequest `request:"mediaType=application/json"`
}

type DeletePendingAggregationRequestResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	StatusCode                     int64
}
