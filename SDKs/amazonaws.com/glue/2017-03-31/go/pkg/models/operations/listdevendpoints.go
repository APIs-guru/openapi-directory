package operations

import (
	"openapi/pkg/models/shared"
)

type ListDevEndpointsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDevEndpointsXAmzTargetEnum string

const (
	ListDevEndpointsXAmzTargetEnumAwsGlueListDevEndpoints ListDevEndpointsXAmzTargetEnum = "AWSGlue.ListDevEndpoints"
)

type ListDevEndpointsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDevEndpointsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDevEndpointsRequest struct {
	QueryParams ListDevEndpointsQueryParams
	Headers     ListDevEndpointsHeaders
	Request     shared.ListDevEndpointsRequest `request:"mediaType=application/json"`
}

type ListDevEndpointsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	ListDevEndpointsResponse  *shared.ListDevEndpointsResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
