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

type CreateProjectRequestBody struct {
	ClientToken        *string           `json:"clientToken,omitempty"`
	PortalID           string            `json:"portalId"`
	ProjectDescription *string           `json:"projectDescription,omitempty"`
	ProjectName        string            `json:"projectName"`
	Tags               map[string]string `json:"tags,omitempty"`
}

type CreateProjectRequest struct {
	Headers CreateProjectHeaders
	Request CreateProjectRequestBody `request:"mediaType=application/json"`
}

type CreateProjectResponse struct {
	ContentType               string
	CreateProjectResponse     *shared.CreateProjectResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
