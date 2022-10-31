package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetDeploymentsXAmzTargetEnum string

const (
	BatchGetDeploymentsXAmzTargetEnumCodeDeploy20141006BatchGetDeployments BatchGetDeploymentsXAmzTargetEnum = "CodeDeploy_20141006.BatchGetDeployments"
)

type BatchGetDeploymentsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetDeploymentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
