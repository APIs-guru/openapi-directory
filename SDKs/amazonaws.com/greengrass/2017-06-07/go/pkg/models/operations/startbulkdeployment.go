package operations

import (
	"openapi/pkg/models/shared"
)

type StartBulkDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type StartBulkDeploymentRequestBody struct {
	ExecutionRoleArn string            `json:"ExecutionRoleArn"`
	InputFileURI     string            `json:"InputFileUri"`
	Tags             map[string]string `json:"tags,omitempty"`
}

type StartBulkDeploymentRequest struct {
	Headers StartBulkDeploymentHeaders
	Request StartBulkDeploymentRequestBody `request:"mediaType=application/json"`
}

type StartBulkDeploymentResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	StartBulkDeploymentResponse *shared.StartBulkDeploymentResponse
	StatusCode                  int64
}
