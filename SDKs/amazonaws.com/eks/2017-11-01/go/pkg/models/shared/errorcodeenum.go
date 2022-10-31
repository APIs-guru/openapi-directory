package shared




type ErrorCodeEnum string

const (
    ErrorCodeEnumSubnetNotFound ErrorCodeEnum = "SubnetNotFound"
ErrorCodeEnumSecurityGroupNotFound ErrorCodeEnum = "SecurityGroupNotFound"
ErrorCodeEnumEniLimitReached ErrorCodeEnum = "EniLimitReached"
ErrorCodeEnumIPNotAvailable ErrorCodeEnum = "IpNotAvailable"
ErrorCodeEnumAccessDenied ErrorCodeEnum = "AccessDenied"
ErrorCodeEnumOperationNotPermitted ErrorCodeEnum = "OperationNotPermitted"
ErrorCodeEnumVpcIDNotFound ErrorCodeEnum = "VpcIdNotFound"
ErrorCodeEnumUnknown ErrorCodeEnum = "Unknown"
ErrorCodeEnumNodeCreationFailure ErrorCodeEnum = "NodeCreationFailure"
ErrorCodeEnumPodEvictionFailure ErrorCodeEnum = "PodEvictionFailure"
ErrorCodeEnumInsufficientFreeAddresses ErrorCodeEnum = "InsufficientFreeAddresses"
ErrorCodeEnumClusterUnreachable ErrorCodeEnum = "ClusterUnreachable"
ErrorCodeEnumInsufficientNumberOfReplicas ErrorCodeEnum = "InsufficientNumberOfReplicas"
ErrorCodeEnumConfigurationConflict ErrorCodeEnum = "ConfigurationConflict"
ErrorCodeEnumAdmissionRequestDenied ErrorCodeEnum = "AdmissionRequestDenied"
ErrorCodeEnumUnsupportedAddonModification ErrorCodeEnum = "UnsupportedAddonModification"
ErrorCodeEnumK8sResourceNotFound ErrorCodeEnum = "K8sResourceNotFound"
)


