package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateProjectRequestBodyPlacementTemplate struct {
	DefaultAttributes map[string]string                `json:"defaultAttributes,omitempty"`
	DeviceTemplates   map[string]shared.DeviceTemplate `json:"deviceTemplates,omitempty"`
}

type CreateProjectRequestBody struct {
	Description       *string                                    `json:"description,omitempty"`
	PlacementTemplate *CreateProjectRequestBodyPlacementTemplate `json:"placementTemplate,omitempty"`
	ProjectName       string                                     `json:"projectName"`
	Tags              map[string]string                          `json:"tags,omitempty"`
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
