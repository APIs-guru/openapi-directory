package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetDeploymentTargetsXAmzTargetEnum string

const (
	BatchGetDeploymentTargetsXAmzTargetEnumCodeDeploy20141006BatchGetDeploymentTargets BatchGetDeploymentTargetsXAmzTargetEnum = "CodeDeploy_20141006.BatchGetDeploymentTargets"
)

type BatchGetDeploymentTargetsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetDeploymentTargetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetDeploymentTargetsRequest struct {
	Headers BatchGetDeploymentTargetsHeaders
	Request shared.BatchGetDeploymentTargetsInput `request:"mediaType=application/json"`
}

type BatchGetDeploymentTargetsResponse struct {
	BatchGetDeploymentTargetsOutput           *shared.BatchGetDeploymentTargetsOutput
	ContentType                               string
	DeploymentDoesNotExistException           *interface{}
	DeploymentIDRequiredException             *interface{}
	DeploymentNotStartedException             *interface{}
	DeploymentTargetDoesNotExistException     *interface{}
	DeploymentTargetIDRequiredException       *interface{}
	DeploymentTargetListSizeExceededException *interface{}
	InstanceDoesNotExistException             *interface{}
	InvalidDeploymentIDException              *interface{}
	InvalidDeploymentTargetIDException        *interface{}
	StatusCode                                int64
}
