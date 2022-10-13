from dataclasses import dataclass, field
from typing import Enum

class NodegroupIssueCodeEnum(str, Enum):
    AUTO_SCALING_GROUP_NOT_FOUND = "AutoScalingGroupNotFound"
    AUTO_SCALING_GROUP_INVALID_CONFIGURATION = "AutoScalingGroupInvalidConfiguration"
    EC2_SECURITY_GROUP_NOT_FOUND = "Ec2SecurityGroupNotFound"
    EC2_SECURITY_GROUP_DELETION_FAILURE = "Ec2SecurityGroupDeletionFailure"
    EC2_LAUNCH_TEMPLATE_NOT_FOUND = "Ec2LaunchTemplateNotFound"
    EC2_LAUNCH_TEMPLATE_VERSION_MISMATCH = "Ec2LaunchTemplateVersionMismatch"
    EC2_SUBNET_NOT_FOUND = "Ec2SubnetNotFound"
    EC2_SUBNET_INVALID_CONFIGURATION = "Ec2SubnetInvalidConfiguration"
    IAM_INSTANCE_PROFILE_NOT_FOUND = "IamInstanceProfileNotFound"
    IAM_LIMIT_EXCEEDED = "IamLimitExceeded"
    IAM_NODE_ROLE_NOT_FOUND = "IamNodeRoleNotFound"
    NODE_CREATION_FAILURE = "NodeCreationFailure"
    ASG_INSTANCE_LAUNCH_FAILURES = "AsgInstanceLaunchFailures"
    INSTANCE_LIMIT_EXCEEDED = "InstanceLimitExceeded"
    INSUFFICIENT_FREE_ADDRESSES = "InsufficientFreeAddresses"
    ACCESS_DENIED = "AccessDenied"
    INTERNAL_FAILURE = "InternalFailure"
    CLUSTER_UNREACHABLE = "ClusterUnreachable"

