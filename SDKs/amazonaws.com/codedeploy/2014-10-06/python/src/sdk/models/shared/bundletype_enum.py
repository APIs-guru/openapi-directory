from dataclasses import dataclass, field
from typing import Enum

class BundleTypeEnum(str, Enum):
    TAR = "tar"
    TGZ = "tgz"
    ZIP = "zip"
    YAML = "YAML"
    JSON = "JSON"

