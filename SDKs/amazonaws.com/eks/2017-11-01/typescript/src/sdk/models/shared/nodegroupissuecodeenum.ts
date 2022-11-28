


export enum NodegroupIssueCodeEnum {
    AutoScalingGroupNotFound = "AutoScalingGroupNotFound",
    AutoScalingGroupInvalidConfiguration = "AutoScalingGroupInvalidConfiguration",
    Ec2SecurityGroupNotFound = "Ec2SecurityGroupNotFound",
    Ec2SecurityGroupDeletionFailure = "Ec2SecurityGroupDeletionFailure",
    Ec2LaunchTemplateNotFound = "Ec2LaunchTemplateNotFound",
    Ec2LaunchTemplateVersionMismatch = "Ec2LaunchTemplateVersionMismatch",
    Ec2SubnetNotFound = "Ec2SubnetNotFound",
    Ec2SubnetInvalidConfiguration = "Ec2SubnetInvalidConfiguration",
    IamInstanceProfileNotFound = "IamInstanceProfileNotFound",
    IamLimitExceeded = "IamLimitExceeded",
    IamNodeRoleNotFound = "IamNodeRoleNotFound",
    NodeCreationFailure = "NodeCreationFailure",
    AsgInstanceLaunchFailures = "AsgInstanceLaunchFailures",
    InstanceLimitExceeded = "InstanceLimitExceeded",
    InsufficientFreeAddresses = "InsufficientFreeAddresses",
    AccessDenied = "AccessDenied",
    InternalFailure = "InternalFailure",
    ClusterUnreachable = "ClusterUnreachable"
}
