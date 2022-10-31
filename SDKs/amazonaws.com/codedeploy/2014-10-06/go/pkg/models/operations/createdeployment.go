package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentXAmzTargetEnum string

const (
	CreateDeploymentXAmzTargetEnumCodeDeploy20141006CreateDeployment CreateDeploymentXAmzTargetEnum = "CodeDeploy_20141006.CreateDeployment"
)

type CreateDeploymentHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDeploymentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateDeploymentRequest struct {
	Headers CreateDeploymentHeaders
	Request shared.CreateDeploymentInput `request:"mediaType=application/json"`
}

type CreateDeploymentResponse struct {
	ApplicationDoesNotExistException                   *interface{}
	ApplicationNameRequiredException                   *interface{}
	ContentType                                        string
	CreateDeploymentOutput                             *shared.CreateDeploymentOutput
	DeploymentConfigDoesNotExistException              *interface{}
	DeploymentGroupDoesNotExistException               *interface{}
	DeploymentGroupNameRequiredException               *interface{}
	DeploymentLimitExceededException                   *interface{}
	DescriptionTooLongException                        *interface{}
	InvalidApplicationNameException                    *interface{}
	InvalidAutoRollbackConfigException                 *interface{}
	InvalidAutoScalingGroupException                   *interface{}
	InvalidDeploymentConfigNameException               *interface{}
	InvalidDeploymentGroupNameException                *interface{}
	InvalidFileExistsBehaviorException                 *interface{}
	InvalidGitHubAccountTokenException                 *interface{}
	InvalidIgnoreApplicationStopFailuresValueException *interface{}
	InvalidLoadBalancerInfoException                   *interface{}
	InvalidRevisionException                           *interface{}
	InvalidRoleException                               *interface{}
	InvalidTargetInstancesException                    *interface{}
	InvalidTrafficRoutingConfigurationException        *interface{}
	InvalidUpdateOutdatedInstancesOnlyValueException   *interface{}
	RevisionDoesNotExistException                      *interface{}
	RevisionRequiredException                          *interface{}
	StatusCode                                         int64
	ThrottlingException                                *interface{}
}
