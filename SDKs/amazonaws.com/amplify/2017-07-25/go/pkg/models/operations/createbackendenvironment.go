package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendEnvironmentPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateBackendEnvironmentRequestBody struct {
	DeploymentArtifacts *string `json:"deploymentArtifacts,omitempty"`
	EnvironmentName     string  `json:"environmentName"`
	StackName           *string `json:"stackName,omitempty"`
}

type CreateBackendEnvironmentRequest struct {
	PathParams CreateBackendEnvironmentPathParams
	Headers    CreateBackendEnvironmentHeaders
	Request    CreateBackendEnvironmentRequestBody `request:"mediaType=application/json"`
}

type CreateBackendEnvironmentResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	CreateBackendEnvironmentResult *shared.CreateBackendEnvironmentResult
	InternalFailureException       *interface{}
	LimitExceededException         *interface{}
	NotFoundException              *interface{}
	StatusCode                     int64
	UnauthorizedException          *interface{}
}
