package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMissionProfilePathParams struct {
	MissionProfileID string `pathParam:"style=simple,explode=false,name=missionProfileId"`
}

type UpdateMissionProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateMissionProfileRequestBody struct {
	ContactPostPassDurationSeconds      *int64     `json:"contactPostPassDurationSeconds,omitempty"`
	ContactPrePassDurationSeconds       *int64     `json:"contactPrePassDurationSeconds,omitempty"`
	DataflowEdges                       [][]string `json:"dataflowEdges,omitempty"`
	MinimumViableContactDurationSeconds *int64     `json:"minimumViableContactDurationSeconds,omitempty"`
	Name                                *string    `json:"name,omitempty"`
	TrackingConfigArn                   *string    `json:"trackingConfigArn,omitempty"`
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
