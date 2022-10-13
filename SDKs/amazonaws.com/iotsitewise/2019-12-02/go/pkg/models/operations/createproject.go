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

type CreateProjectRequestBody struct {
	ClientToken        *string           `json:"clientToken"`
	PortalID           string            `json:"portalId"`
	ProjectDescription *string           `json:"projectDescription"`
	ProjectName        string            `json:"projectName"`
	Tags               map[string]string `json:"tags"`
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
