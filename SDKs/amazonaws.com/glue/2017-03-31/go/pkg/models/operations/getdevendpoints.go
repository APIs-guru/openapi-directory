package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevEndpointsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetDevEndpointsXAmzTargetEnum string

const (
	GetDevEndpointsXAmzTargetEnumAwsGlueGetDevEndpoints GetDevEndpointsXAmzTargetEnum = "AWSGlue.GetDevEndpoints"
)

type GetDevEndpointsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDevEndpointsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDevEndpointsRequest struct {
	QueryParams GetDevEndpointsQueryParams
	Headers     GetDevEndpointsHeaders
	Request     shared.GetDevEndpointsRequest `request:"mediaType=application/json"`
}

type GetDevEndpointsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetDevEndpointsResponse   *shared.GetDevEndpointsResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
