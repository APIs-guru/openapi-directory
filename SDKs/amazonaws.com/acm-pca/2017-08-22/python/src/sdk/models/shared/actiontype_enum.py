from dataclasses import dataclass, field
from typing import Enum,List

class ActionTypeEnum(str, Enum):
    ISSUE_CERTIFICATE = "IssueCertificate"
    GET_CERTIFICATE = "GetCertificate"
    LIST_PERMISSIONS = "ListPermissions"

