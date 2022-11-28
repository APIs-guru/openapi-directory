from dataclasses import dataclass, field
from enum import Enum

class KeyAlgorithmEnum(str, Enum):
    RSA_2048 = "RSA_2048"
    RSA_4096 = "RSA_4096"
    EC_PRIME256V1 = "EC_prime256v1"
    EC_SECP384R1 = "EC_secp384r1"

