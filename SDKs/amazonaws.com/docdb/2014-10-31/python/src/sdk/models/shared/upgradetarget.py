from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UpgradeTarget:
    r"""UpgradeTarget
    The version of the database engine that an instance can be upgraded to.
    """
    
    auto_upgrade: Optional[bool] = field(default=None)
    description: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    is_major_version_upgrade: Optional[bool] = field(default=None)
    
