package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetDeploymentInstancesXAmzTargetEnum string

const (
	BatchGetDeploymentInstancesXAmzTargetEnumCodeDeploy20141006BatchGetDeploymentInstances BatchGetDeploymentInstancesXAmzTargetEnum = "CodeDeploy_20141006.BatchGetDeploymentInstances"
)

type BatchGetDeploymentInstancesHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetDeploymentInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetDeploymentInstancesRequest struct {
	Headers BatchGetDeploymentInstancesHeaders
	Request shared.BatchGetDeploymentInstancesInput `request:"mediaType=application/json"`
}

type BatchGetDeploymentInstancesResponse struct {
	BatchGetDeploymentInstancesOutput *shared.BatchGetDeploymentInstancesOutput
	BatchLimitExceededException       *interface{}
	ContentType                       string
	DeploymentDoesNotExistException   *interface{}
	DeploymentIDRequiredException     *interface{}
	InstanceIDRequiredException       *interface{}
	InvalidComputePlatformException   *interface{}
	InvalidDeploymentIDException      *interface{}
	InvalidInstanceNameException      *interface{}
	StatusCode                        int64
}
