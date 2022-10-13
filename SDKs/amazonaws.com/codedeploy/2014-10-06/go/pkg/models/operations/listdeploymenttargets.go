package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeploymentTargetsXAmzTargetEnum string

const (
	ListDeploymentTargetsXAmzTargetEnumCodeDeploy20141006ListDeploymentTargets ListDeploymentTargetsXAmzTargetEnum = "CodeDeploy_20141006.ListDeploymentTargets"
)

type ListDeploymentTargetsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDeploymentTargetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDeploymentTargetsRequest struct {
	Headers ListDeploymentTargetsHeaders
	Request shared.ListDeploymentTargetsInput `request:"mediaType=application/json"`
}

type ListDeploymentTargetsResponse struct {
	ContentType                            string
	DeploymentDoesNotExistException        *interface{}
	DeploymentIDRequiredException          *interface{}
	DeploymentNotStartedException          *interface{}
	InvalidDeploymentIDException           *interface{}
	InvalidDeploymentInstanceTypeException *interface{}
	InvalidInstanceStatusException         *interface{}
	InvalidInstanceTypeException           *interface{}
	InvalidNextTokenException              *interface{}
	ListDeploymentTargetsOutput            *shared.ListDeploymentTargetsOutput
	StatusCode                             int64
}
