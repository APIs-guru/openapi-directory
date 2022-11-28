from dataclasses import dataclass, field
from enum import Enum

class ErrorCodeEnum(str, Enum):
    SUBNET_NOT_FOUND = "SubnetNotFound"
    SECURITY_GROUP_NOT_FOUND = "SecurityGroupNotFound"
    ENI_LIMIT_REACHED = "EniLimitReached"
    IP_NOT_AVAILABLE = "IpNotAvailable"
    ACCESS_DENIED = "AccessDenied"
    OPERATION_NOT_PERMITTED = "OperationNotPermitted"
    VPC_ID_NOT_FOUND = "VpcIdNotFound"
    UNKNOWN = "Unknown"
    NODE_CREATION_FAILURE = "NodeCreationFailure"
    POD_EVICTION_FAILURE = "PodEvictionFailure"
    INSUFFICIENT_FREE_ADDRESSES = "InsufficientFreeAddresses"
    CLUSTER_UNREACHABLE = "ClusterUnreachable"
    INSUFFICIENT_NUMBER_OF_REPLICAS = "InsufficientNumberOfReplicas"
    CONFIGURATION_CONFLICT = "ConfigurationConflict"
    ADMISSION_REQUEST_DENIED = "AdmissionRequestDenied"
    UNSUPPORTED_ADDON_MODIFICATION = "UnsupportedAddonModification"
    K8S_RESOURCE_NOT_FOUND = "K8sResourceNotFound"

