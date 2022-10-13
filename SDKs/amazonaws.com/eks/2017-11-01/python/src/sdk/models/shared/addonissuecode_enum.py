from dataclasses import dataclass, field
from typing import Enum

class AddonIssueCodeEnum(str, Enum):
    ACCESS_DENIED = "AccessDenied"
    INTERNAL_FAILURE = "InternalFailure"
    CLUSTER_UNREACHABLE = "ClusterUnreachable"
    INSUFFICIENT_NUMBER_OF_REPLICAS = "InsufficientNumberOfReplicas"
    CONFIGURATION_CONFLICT = "ConfigurationConflict"
    ADMISSION_REQUEST_DENIED = "AdmissionRequestDenied"
    UNSUPPORTED_ADDON_MODIFICATION = "UnsupportedAddonModification"
    K8S_RESOURCE_NOT_FOUND = "K8sResourceNotFound"

