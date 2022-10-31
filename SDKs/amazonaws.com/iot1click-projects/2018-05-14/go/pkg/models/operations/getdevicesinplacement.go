package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevicesInPlacementPathParams struct {
	PlacementName string `pathParam:"style=simple,explode=false,name=placementName"`
	ProjectName   string `pathParam:"style=simple,explode=false,name=projectName"`
}

type GetDevicesInPlacementHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDevicesInPlacementRequest struct {
	PathParams GetDevicesInPlacementPathParams
	Headers    GetDevicesInPlacementHeaders
}

type GetDevicesInPlacementResponse struct {
	ContentType                   string
	GetDevicesInPlacementResponse *shared.GetDevicesInPlacementResponse
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
