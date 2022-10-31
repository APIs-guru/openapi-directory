package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentGroupXAmzTargetEnum string

const (
	CreateDeploymentGroupXAmzTargetEnumCodeDeploy20141006CreateDeploymentGroup CreateDeploymentGroupXAmzTargetEnum = "CodeDeploy_20141006.CreateDeploymentGroup"
)

type CreateDeploymentGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDeploymentGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateDeploymentGroupRequest struct {
	Headers CreateDeploymentGroupHeaders
	Request shared.CreateDeploymentGroupInput `request:"mediaType=application/json"`
}

type CreateDeploymentGroupResponse struct {
	AlarmsLimitExceededException                     *interface{}
	ApplicationDoesNotExistException                 *interface{}
	ApplicationNameRequiredException                 *interface{}
	ContentType                                      string
	CreateDeploymentGroupOutput                      *shared.CreateDeploymentGroupOutput
	DeploymentConfigDoesNotExistException            *interface{}
	DeploymentGroupAlreadyExistsException            *interface{}
	DeploymentGroupLimitExceededException            *interface{}
	DeploymentGroupNameRequiredException             *interface{}
	EcsServiceMappingLimitExceededException          *interface{}
	InvalidAlarmConfigException                      *interface{}
	InvalidApplicationNameException                  *interface{}
	InvalidAutoRollbackConfigException               *interface{}
	InvalidAutoScalingGroupException                 *interface{}
	InvalidBlueGreenDeploymentConfigurationException *interface{}
	InvalidDeploymentConfigNameException             *interface{}
	InvalidDeploymentGroupNameException              *interface{}
	InvalidDeploymentStyleException                  *interface{}
	InvalidEc2TagCombinationException                *interface{}
	InvalidEc2TagException                           *interface{}
	InvalidEcsServiceException                       *interface{}
	InvalidInputException                            *interface{}
	InvalidLoadBalancerInfoException                 *interface{}
	InvalidOnPremisesTagCombinationException         *interface{}
	InvalidRoleException                             *interface{}
	InvalidTagException                              *interface{}
	InvalidTagsToAddException                        *interface{}
	InvalidTargetGroupPairException                  *interface{}
	InvalidTrafficRoutingConfigurationException      *interface{}
	InvalidTriggerConfigException                    *interface{}
	LifecycleHookLimitExceededException              *interface{}
	RoleRequiredException                            *interface{}
	StatusCode                                       int64
	TagSetListLimitExceededException                 *interface{}
	ThrottlingException                              *interface{}
	TriggerTargetsLimitExceededException             *interface{}
}
