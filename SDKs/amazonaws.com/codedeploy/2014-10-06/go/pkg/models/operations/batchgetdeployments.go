package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetDeploymentsXAmzTargetEnum string

const (
	BatchGetDeploymentsXAmzTargetEnumCodeDeploy20141006BatchGetDeployments BatchGetDeploymentsXAmzTargetEnum = "CodeDeploy_20141006.BatchGetDeployments"
)

type BatchGetDeploymentsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetDeploymentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetDeploymentsRequest struct {
	Headers BatchGetDeploymentsHeaders
	Request shared.BatchGetDeploymentsInput `request:"mediaType=application/json"`
}

type BatchGetDeploymentsResponse struct {
	BatchGetDeploymentsOutput     *shared.BatchGetDeploymentsOutput
	BatchLimitExceededException   *interface{}
	ContentType                   string
	DeploymentIDRequiredException *interface{}
	InvalidDeploymentIDException  *interface{}
	StatusCode                    int64
}
