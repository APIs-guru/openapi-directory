package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetDeploymentGroupsXAmzTargetEnum string

const (
	BatchGetDeploymentGroupsXAmzTargetEnumCodeDeploy20141006BatchGetDeploymentGroups BatchGetDeploymentGroupsXAmzTargetEnum = "CodeDeploy_20141006.BatchGetDeploymentGroups"
)

type BatchGetDeploymentGroupsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetDeploymentGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetDeploymentGroupsRequest struct {
	Headers BatchGetDeploymentGroupsHeaders
	Request shared.BatchGetDeploymentGroupsInput `request:"mediaType=application/json"`
}

type BatchGetDeploymentGroupsResponse struct {
	ApplicationDoesNotExistException      *interface{}
	ApplicationNameRequiredException      *interface{}
	BatchGetDeploymentGroupsOutput        *shared.BatchGetDeploymentGroupsOutput
	BatchLimitExceededException           *interface{}
	ContentType                           string
	DeploymentConfigDoesNotExistException *interface{}
	DeploymentGroupNameRequiredException  *interface{}
	InvalidApplicationNameException       *interface{}
	InvalidDeploymentGroupNameException   *interface{}
	StatusCode                            int64
}
