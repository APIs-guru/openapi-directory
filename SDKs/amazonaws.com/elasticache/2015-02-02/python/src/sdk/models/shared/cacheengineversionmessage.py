from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheEngineVersionMessage:
    r"""CacheEngineVersionMessage
    Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
    """
    
    cache_engine_versions: Optional[List[CacheEngineVersion]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
