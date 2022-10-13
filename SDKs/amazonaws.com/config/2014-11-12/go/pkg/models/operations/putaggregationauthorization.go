package operations

import (
	"openapi/pkg/models/shared"
)

type PutAggregationAuthorizationXAmzTargetEnum string

const (
	PutAggregationAuthorizationXAmzTargetEnumStarlingDoveServicePutAggregationAuthorization PutAggregationAuthorizationXAmzTargetEnum = "StarlingDoveService.PutAggregationAuthorization"
)

type PutAggregationAuthorizationHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAggregationAuthorizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutAggregationAuthorizationRequest struct {
	Headers PutAggregationAuthorizationHeaders
	Request shared.PutAggregationAuthorizationRequest `request:"mediaType=application/json"`
}

type PutAggregationAuthorizationResponse struct {
	ContentType                         string
	InvalidParameterValueException      *interface{}
	PutAggregationAuthorizationResponse *shared.PutAggregationAuthorizationResponse
	StatusCode                          int64
}
