from dataclasses import dataclass, field
from enum import Enum

class FunctionRuntimeEnum(str, Enum):
    CLOUDFRONT_JS_1_0 = "cloudfront-js-1.0"

