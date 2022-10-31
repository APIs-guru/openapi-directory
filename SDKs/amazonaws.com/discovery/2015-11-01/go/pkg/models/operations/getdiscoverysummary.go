package operations

import (
	"openapi/pkg/models/shared"
)

type GetDiscoverySummaryXAmzTargetEnum string

const (
	GetDiscoverySummaryXAmzTargetEnumAwsPoseidonServiceV20151101GetDiscoverySummary GetDiscoverySummaryXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.GetDiscoverySummary"
)

type GetDiscoverySummaryHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDiscoverySummaryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDiscoverySummaryRequest struct {
	Headers GetDiscoverySummaryHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetDiscoverySummaryResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	GetDiscoverySummaryResponse    *shared.GetDiscoverySummaryResponse
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
