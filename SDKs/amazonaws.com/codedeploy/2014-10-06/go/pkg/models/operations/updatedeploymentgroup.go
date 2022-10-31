package operations

import (
"openapi/pkg/models/shared")


type UpdateDeploymentGroupXAmzTargetEnum string

const (
    UpdateDeploymentGroupXAmzTargetEnumCodeDeploy20141006UpdateDeploymentGroup UpdateDeploymentGroupXAmzTargetEnum = "CodeDeploy_20141006.UpdateDeploymentGroup"
)


type UpdateDeploymentGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateDeploymentGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateDeploymentGroupRequest struct {
    Headers UpdateDeploymentGroupHeaders 
    Request shared.UpdateDeploymentGroupInput `request:"mediaType=application/json"`
    
}

type UpdateDeploymentGroupResponse struct {
    AlarmsLimitExceededException *interface{} 
    ApplicationDoesNotExistException *interface{} 
    ApplicationNameRequiredException *interface{} 
    ContentType string 
    DeploymentConfigDoesNotExistException *interface{} 
    DeploymentGroupAlreadyExistsException *interface{} 
    DeploymentGroupDoesNotExistException *interface{} 
    DeploymentGroupNameRequiredException *interface{} 
    EcsServiceMappingLimitExceededException *interface{} 
    InvalidAlarmConfigException *interface{} 
    InvalidApplicationNameException *interface{} 
    InvalidAutoRollbackConfigException *interface{} 
    InvalidAutoScalingGroupException *interface{} 
    InvalidBlueGreenDeploymentConfigurationException *interface{} 
    InvalidDeploymentConfigNameException *interface{} 
    InvalidDeploymentGroupNameException *interface{} 
    InvalidDeploymentStyleException *interface{} 
    InvalidEc2TagCombinationException *interface{} 
    InvalidEc2TagException *interface{} 
    InvalidEcsServiceException *interface{} 
    InvalidInputException *interface{} 
    InvalidLoadBalancerInfoException *interface{} 
    InvalidOnPremisesTagCombinationException *interface{} 
    InvalidRoleException *interface{} 
    InvalidTagException *interface{} 
    InvalidTargetGroupPairException *interface{} 
    InvalidTrafficRoutingConfigurationException *interface{} 
    InvalidTriggerConfigException *interface{} 
    LifecycleHookLimitExceededException *interface{} 
    StatusCode int64 
    TagSetListLimitExceededException *interface{} 
    ThrottlingException *interface{} 
    TriggerTargetsLimitExceededException *interface{} 
    UpdateDeploymentGroupOutput *shared.UpdateDeploymentGroupOutput 
    
}

