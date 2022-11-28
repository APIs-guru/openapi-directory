from dataclasses import dataclass, field
from enum import Enum

class ClientVpnAuthenticationTypeEnum(str, Enum):
    CERTIFICATE_AUTHENTICATION = "certificate-authentication"
    DIRECTORY_SERVICE_AUTHENTICATION = "directory-service-authentication"
    FEDERATED_AUTHENTICATION = "federated-authentication"

