from dataclasses import dataclass, field
from enum import Enum

class ConnectorConfigProviderEnum(str, Enum):
    EKS_ANYWHERE = "EKS_ANYWHERE"
    ANTHOS = "ANTHOS"
    GKE = "GKE"
    AKS = "AKS"
    OPENSHIFT = "OPENSHIFT"
    TANZU = "TANZU"
    RANCHER = "RANCHER"
    EC2 = "EC2"
    OTHER = "OTHER"

