from dataclasses import dataclass, field
from typing import Enum

class PluginNameValueEnum(str, Enum):
    NO_PREFERENCE = "no-preference"
    TEST_DECODING = "test-decoding"
    PGLOGICAL = "pglogical"

