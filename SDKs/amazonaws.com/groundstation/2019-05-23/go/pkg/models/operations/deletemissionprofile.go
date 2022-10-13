package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMissionProfilePathParams struct {
	MissionProfileID string `pathParam:"style=simple,explode=false,name=missionProfileId"`
}

type DeleteMissionProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteMissionProfileRequest struct {
	PathParams DeleteMissionProfilePathParams
	Headers    DeleteMissionProfileHeaders
}

type DeleteMissionProfileResponse struct {
	ContentType               string
	DependencyException       *interface{}
	InvalidParameterException *interface{}
	MissionProfileIDResponse  *shared.MissionProfileIDResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
