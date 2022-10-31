package shared




type ErrorCodeEnum string

const (
    ErrorCodeEnumAgentIssue ErrorCodeEnum = "AGENT_ISSUE"
ErrorCodeEnumAlarmActive ErrorCodeEnum = "ALARM_ACTIVE"
ErrorCodeEnumApplicationMissing ErrorCodeEnum = "APPLICATION_MISSING"
ErrorCodeEnumAutoscalingValidationError ErrorCodeEnum = "AUTOSCALING_VALIDATION_ERROR"
ErrorCodeEnumAutoScalingConfiguration ErrorCodeEnum = "AUTO_SCALING_CONFIGURATION"
ErrorCodeEnumAutoScalingIamRolePermissions ErrorCodeEnum = "AUTO_SCALING_IAM_ROLE_PERMISSIONS"
ErrorCodeEnumCodedeployResourceCannotBeFound ErrorCodeEnum = "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND"
ErrorCodeEnumCustomerApplicationUnhealthy ErrorCodeEnum = "CUSTOMER_APPLICATION_UNHEALTHY"
ErrorCodeEnumDeploymentGroupMissing ErrorCodeEnum = "DEPLOYMENT_GROUP_MISSING"
ErrorCodeEnumEcsUpdateError ErrorCodeEnum = "ECS_UPDATE_ERROR"
ErrorCodeEnumElasticLoadBalancingInvalid ErrorCodeEnum = "ELASTIC_LOAD_BALANCING_INVALID"
ErrorCodeEnumElbInvalidInstance ErrorCodeEnum = "ELB_INVALID_INSTANCE"
ErrorCodeEnumHealthConstraints ErrorCodeEnum = "HEALTH_CONSTRAINTS"
ErrorCodeEnumHealthConstraintsInvalid ErrorCodeEnum = "HEALTH_CONSTRAINTS_INVALID"
ErrorCodeEnumHookExecutionFailure ErrorCodeEnum = "HOOK_EXECUTION_FAILURE"
ErrorCodeEnumIamRoleMissing ErrorCodeEnum = "IAM_ROLE_MISSING"
ErrorCodeEnumIamRolePermissions ErrorCodeEnum = "IAM_ROLE_PERMISSIONS"
ErrorCodeEnumInternalError ErrorCodeEnum = "INTERNAL_ERROR"
ErrorCodeEnumInvalidEcsService ErrorCodeEnum = "INVALID_ECS_SERVICE"
ErrorCodeEnumInvalidLambdaConfiguration ErrorCodeEnum = "INVALID_LAMBDA_CONFIGURATION"
ErrorCodeEnumInvalidLambdaFunction ErrorCodeEnum = "INVALID_LAMBDA_FUNCTION"
ErrorCodeEnumInvalidRevision ErrorCodeEnum = "INVALID_REVISION"
ErrorCodeEnumManualStop ErrorCodeEnum = "MANUAL_STOP"
ErrorCodeEnumMissingBlueGreenDeploymentConfiguration ErrorCodeEnum = "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION"
ErrorCodeEnumMissingElbInformation ErrorCodeEnum = "MISSING_ELB_INFORMATION"
ErrorCodeEnumMissingGithubToken ErrorCodeEnum = "MISSING_GITHUB_TOKEN"
ErrorCodeEnumNoEc2Subscription ErrorCodeEnum = "NO_EC2_SUBSCRIPTION"
ErrorCodeEnumNoInstances ErrorCodeEnum = "NO_INSTANCES"
ErrorCodeEnumOverMaxInstances ErrorCodeEnum = "OVER_MAX_INSTANCES"
ErrorCodeEnumResourceLimitExceeded ErrorCodeEnum = "RESOURCE_LIMIT_EXCEEDED"
ErrorCodeEnumRevisionMissing ErrorCodeEnum = "REVISION_MISSING"
ErrorCodeEnumThrottled ErrorCodeEnum = "THROTTLED"
ErrorCodeEnumTimeout ErrorCodeEnum = "TIMEOUT"
ErrorCodeEnumCloudformationStackFailure ErrorCodeEnum = "CLOUDFORMATION_STACK_FAILURE"
)


