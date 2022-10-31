package operations

import (
	"openapi/pkg/models/shared"
)

type ListServerNeighborsXAmzTargetEnum string

const (
	ListServerNeighborsXAmzTargetEnumAwsPoseidonServiceV20151101ListServerNeighbors ListServerNeighborsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.ListServerNeighbors"
)

type ListServerNeighborsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServerNeighborsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListServerNeighborsRequest struct {
	Headers ListServerNeighborsHeaders
	Request shared.ListServerNeighborsRequest `request:"mediaType=application/json"`
}

type ListServerNeighborsResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ListServerNeighborsResponse    *shared.ListServerNeighborsResponse
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
