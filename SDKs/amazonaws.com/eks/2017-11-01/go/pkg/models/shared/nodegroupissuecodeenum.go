package shared

type NodegroupIssueCodeEnum string

const (
	NodegroupIssueCodeEnumAutoScalingGroupNotFound             NodegroupIssueCodeEnum = "AutoScalingGroupNotFound"
	NodegroupIssueCodeEnumAutoScalingGroupInvalidConfiguration NodegroupIssueCodeEnum = "AutoScalingGroupInvalidConfiguration"
	NodegroupIssueCodeEnumEc2SecurityGroupNotFound             NodegroupIssueCodeEnum = "Ec2SecurityGroupNotFound"
	NodegroupIssueCodeEnumEc2SecurityGroupDeletionFailure      NodegroupIssueCodeEnum = "Ec2SecurityGroupDeletionFailure"
	NodegroupIssueCodeEnumEc2LaunchTemplateNotFound            NodegroupIssueCodeEnum = "Ec2LaunchTemplateNotFound"
	NodegroupIssueCodeEnumEc2LaunchTemplateVersionMismatch     NodegroupIssueCodeEnum = "Ec2LaunchTemplateVersionMismatch"
	NodegroupIssueCodeEnumEc2SubnetNotFound                    NodegroupIssueCodeEnum = "Ec2SubnetNotFound"
	NodegroupIssueCodeEnumEc2SubnetInvalidConfiguration        NodegroupIssueCodeEnum = "Ec2SubnetInvalidConfiguration"
	NodegroupIssueCodeEnumIamInstanceProfileNotFound           NodegroupIssueCodeEnum = "IamInstanceProfileNotFound"
	NodegroupIssueCodeEnumIamLimitExceeded                     NodegroupIssueCodeEnum = "IamLimitExceeded"
	NodegroupIssueCodeEnumIamNodeRoleNotFound                  NodegroupIssueCodeEnum = "IamNodeRoleNotFound"
	NodegroupIssueCodeEnumNodeCreationFailure                  NodegroupIssueCodeEnum = "NodeCreationFailure"
	NodegroupIssueCodeEnumAsgInstanceLaunchFailures            NodegroupIssueCodeEnum = "AsgInstanceLaunchFailures"
	NodegroupIssueCodeEnumInstanceLimitExceeded                NodegroupIssueCodeEnum = "InstanceLimitExceeded"
	NodegroupIssueCodeEnumInsufficientFreeAddresses            NodegroupIssueCodeEnum = "InsufficientFreeAddresses"
	NodegroupIssueCodeEnumAccessDenied                         NodegroupIssueCodeEnum = "AccessDenied"
	NodegroupIssueCodeEnumInternalFailure                      NodegroupIssueCodeEnum = "InternalFailure"
	NodegroupIssueCodeEnumClusterUnreachable                   NodegroupIssueCodeEnum = "ClusterUnreachable"
)
