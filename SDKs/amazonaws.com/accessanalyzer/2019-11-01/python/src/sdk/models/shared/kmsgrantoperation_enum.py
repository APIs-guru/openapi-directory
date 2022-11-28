from dataclasses import dataclass, field
from enum import Enum

class KmsGrantOperationEnum(str, Enum):
    CREATE_GRANT = "CreateGrant"
    DECRYPT = "Decrypt"
    DESCRIBE_KEY = "DescribeKey"
    ENCRYPT = "Encrypt"
    GENERATE_DATA_KEY = "GenerateDataKey"
    GENERATE_DATA_KEY_PAIR = "GenerateDataKeyPair"
    GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT = "GenerateDataKeyPairWithoutPlaintext"
    GENERATE_DATA_KEY_WITHOUT_PLAINTEXT = "GenerateDataKeyWithoutPlaintext"
    GET_PUBLIC_KEY = "GetPublicKey"
    RE_ENCRYPT_FROM = "ReEncryptFrom"
    RE_ENCRYPT_TO = "ReEncryptTo"
    RETIRE_GRANT = "RetireGrant"
    SIGN = "Sign"
    VERIFY = "Verify"

