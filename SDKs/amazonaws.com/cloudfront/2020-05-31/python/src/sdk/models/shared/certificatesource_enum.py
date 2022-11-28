from dataclasses import dataclass, field
from enum import Enum

class CertificateSourceEnum(str, Enum):
    CLOUDFRONT = "cloudfront"
    IAM = "iam"
    ACM = "acm"

