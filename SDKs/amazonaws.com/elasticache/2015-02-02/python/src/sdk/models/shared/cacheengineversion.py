from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CacheEngineVersion:
    r"""CacheEngineVersion
    Provides all of the details about a particular cache engine version.
    """
    
    cache_engine_description: Optional[str] = field(default=None)
    cache_engine_version_description: Optional[str] = field(default=None)
    cache_parameter_group_family: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    
