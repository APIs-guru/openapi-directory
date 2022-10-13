from dataclasses import dataclass, field
from typing import Enum

class CertificateTypeEnum(str, Enum):
    CLIENT_CERT_AUTH = "ClientCertAuth"
    CLIENT_LDAPS = "ClientLDAPS"

