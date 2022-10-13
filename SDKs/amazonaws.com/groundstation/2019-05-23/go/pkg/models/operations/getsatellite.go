package operations

import (
	"openapi/pkg/models/shared"
)

type GetSatellitePathParams struct {
	SatelliteID string `pathParam:"style=simple,explode=false,name=satelliteId"`
}

type GetSatelliteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSatelliteRequest struct {
	PathParams GetSatellitePathParams
	Headers    GetSatelliteHeaders
}

type GetSatelliteResponse struct {
	ContentType               string
	DependencyException       *interface{}
	GetSatelliteResponse      *shared.GetSatelliteResponse
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
