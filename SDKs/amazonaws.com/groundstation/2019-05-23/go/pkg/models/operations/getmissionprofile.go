package operations

import (
	"openapi/pkg/models/shared"
)

type GetMissionProfilePathParams struct {
	MissionProfileID string `pathParam:"style=simple,explode=false,name=missionProfileId"`
}

type GetMissionProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetMissionProfileRequest struct {
	PathParams GetMissionProfilePathParams
	Headers    GetMissionProfileHeaders
}

type GetMissionProfileResponse struct {
	ContentType               string
	DependencyException       *interface{}
	GetMissionProfileResponse *shared.GetMissionProfileResponse
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
