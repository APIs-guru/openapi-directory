package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectPathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
}

type UpdateProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateProjectRequestBodyPlacementTemplate struct {
	DefaultAttributes map[string]string                `json:"defaultAttributes"`
	DeviceTemplates   map[string]shared.DeviceTemplate `json:"deviceTemplates"`
}

type UpdateProjectRequestBody struct {
	Description       *string                                    `json:"description"`
	PlacementTemplate *UpdateProjectRequestBodyPlacementTemplate `json:"placementTemplate"`
}

type UpdateProjectRequest struct {
	PathParams UpdateProjectPathParams
	Headers    UpdateProjectHeaders
	Request    UpdateProjectRequestBody `request:"mediaType=application/json"`
}

type UpdateProjectResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UpdateProjectResponse     map[string]interface{}
}
