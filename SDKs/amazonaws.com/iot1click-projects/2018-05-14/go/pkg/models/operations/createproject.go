package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateProjectRequestBodyPlacementTemplate struct {
	DefaultAttributes map[string]string                `json:"defaultAttributes"`
	DeviceTemplates   map[string]shared.DeviceTemplate `json:"deviceTemplates"`
}

type CreateProjectRequestBody struct {
	Description       *string                                    `json:"description"`
	PlacementTemplate *CreateProjectRequestBodyPlacementTemplate `json:"placementTemplate"`
	ProjectName       string                                     `json:"projectName"`
	Tags              map[string]string                          `json:"tags"`
}

type CreateProjectRequest struct {
	Headers CreateProjectHeaders
	Request CreateProjectRequestBody `request:"mediaType=application/json"`
}

type CreateProjectResponse struct {
	ContentType               string
	CreateProjectResponse     map[string]interface{}
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceConflictException *interface{}
	StatusCode                int64
}
