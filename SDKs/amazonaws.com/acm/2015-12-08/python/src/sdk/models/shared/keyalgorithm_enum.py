from dataclasses import dataclass, field
from typing import Enum

class KeyAlgorithmEnum(str, Enum):
    RSA_1024 = "RSA_1024"
    RSA_2048 = "RSA_2048"
    RSA_3072 = "RSA_3072"
    RSA_4096 = "RSA_4096"
    EC_PRIME256V1 = "EC_prime256v1"
    EC_SECP384R1 = "EC_secp384r1"
    EC_SECP521R1 = "EC_secp521r1"

