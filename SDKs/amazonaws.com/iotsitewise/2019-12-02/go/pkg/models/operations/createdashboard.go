package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDashboardHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDashboardRequestBody struct {
	ClientToken          *string           `json:"clientToken"`
	DashboardDefinition  string            `json:"dashboardDefinition"`
	DashboardDescription *string           `json:"dashboardDescription"`
	DashboardName        string            `json:"dashboardName"`
	ProjectID            string            `json:"projectId"`
	Tags                 map[string]string `json:"tags"`
}

type CreateDashboardRequest struct {
	Headers CreateDashboardHeaders
	Request CreateDashboardRequestBody `request:"mediaType=application/json"`
}

type CreateDashboardResponse struct {
	ContentType               string
	CreateDashboardResponse   *shared.CreateDashboardResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
