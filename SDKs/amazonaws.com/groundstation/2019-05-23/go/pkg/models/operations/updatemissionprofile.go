package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMissionProfilePathParams struct {
	MissionProfileID string `pathParam:"style=simple,explode=false,name=missionProfileId"`
}

type UpdateMissionProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateMissionProfileRequestBody struct {
	ContactPostPassDurationSeconds      *int64     `json:"contactPostPassDurationSeconds"`
	ContactPrePassDurationSeconds       *int64     `json:"contactPrePassDurationSeconds"`
	DataflowEdges                       [][]string `json:"dataflowEdges"`
	MinimumViableContactDurationSeconds *int64     `json:"minimumViableContactDurationSeconds"`
	Name                                *string    `json:"name"`
	TrackingConfigArn                   *string    `json:"trackingConfigArn"`
}

type UpdateMissionProfileRequest struct {
	PathParams UpdateMissionProfilePathParams
	Headers    UpdateMissionProfileHeaders
	Request    UpdateMissionProfileRequestBody `request:"mediaType=application/json"`
}

type UpdateMissionProfileResponse struct {
	ContentType               string
	DependencyException       *interface{}
	InvalidParameterException *interface{}
	MissionProfileIDResponse  *shared.MissionProfileIDResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
