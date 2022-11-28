from dataclasses import dataclass, field
from enum import Enum

class AdditionalConstraintsElementEnum(str, Enum):
    REQUIRE_DIGIT = "REQUIRE_DIGIT"
    REQUIRE_LOWERCASE = "REQUIRE_LOWERCASE"
    REQUIRE_SYMBOL = "REQUIRE_SYMBOL"
    REQUIRE_UPPERCASE = "REQUIRE_UPPERCASE"

