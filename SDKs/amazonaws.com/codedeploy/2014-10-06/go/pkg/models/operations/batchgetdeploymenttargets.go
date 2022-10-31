package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetDeploymentTargetsXAmzTargetEnum string

const (
	BatchGetDeploymentTargetsXAmzTargetEnumCodeDeploy20141006BatchGetDeploymentTargets BatchGetDeploymentTargetsXAmzTargetEnum = "CodeDeploy_20141006.BatchGetDeploymentTargets"
)

type BatchGetDeploymentTargetsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetDeploymentTargetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
