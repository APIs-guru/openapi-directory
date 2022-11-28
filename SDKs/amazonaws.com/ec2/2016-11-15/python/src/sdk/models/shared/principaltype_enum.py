from dataclasses import dataclass, field
from enum import Enum

class PrincipalTypeEnum(str, Enum):
    ALL = "All"
    SERVICE = "Service"
    ORGANIZATION_UNIT = "OrganizationUnit"
    ACCOUNT = "Account"
    USER = "User"
    ROLE = "Role"

