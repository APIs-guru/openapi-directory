from dataclasses import dataclass, field
from typing import Enum

class UpdateParamTypeEnum(str, Enum):
    VERSION = "Version"
    PLATFORM_VERSION = "PlatformVersion"
    ENDPOINT_PRIVATE_ACCESS = "EndpointPrivateAccess"
    ENDPOINT_PUBLIC_ACCESS = "EndpointPublicAccess"
    CLUSTER_LOGGING = "ClusterLogging"
    DESIRED_SIZE = "DesiredSize"
    LABELS_TO_ADD = "LabelsToAdd"
    LABELS_TO_REMOVE = "LabelsToRemove"
    TAINTS_TO_ADD = "TaintsToAdd"
    TAINTS_TO_REMOVE = "TaintsToRemove"
    MAX_SIZE = "MaxSize"
    MIN_SIZE = "MinSize"
    RELEASE_VERSION = "ReleaseVersion"
    PUBLIC_ACCESS_CIDRS = "PublicAccessCidrs"
    LAUNCH_TEMPLATE_NAME = "LaunchTemplateName"
    LAUNCH_TEMPLATE_VERSION = "LaunchTemplateVersion"
    IDENTITY_PROVIDER_CONFIG = "IdentityProviderConfig"
    ENCRYPTION_CONFIG = "EncryptionConfig"
    ADDON_VERSION = "AddonVersion"
    SERVICE_ACCOUNT_ROLE_ARN = "ServiceAccountRoleArn"
    RESOLVE_CONFLICTS = "ResolveConflicts"
    MAX_UNAVAILABLE = "MaxUnavailable"
    MAX_UNAVAILABLE_PERCENTAGE = "MaxUnavailablePercentage"

