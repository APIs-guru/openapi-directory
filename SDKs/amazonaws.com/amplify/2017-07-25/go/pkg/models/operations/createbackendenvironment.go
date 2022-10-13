package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendEnvironmentPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBackendEnvironmentRequestBody struct {
	DeploymentArtifacts *string `json:"deploymentArtifacts"`
	EnvironmentName     string  `json:"environmentName"`
	StackName           *string `json:"stackName"`
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
