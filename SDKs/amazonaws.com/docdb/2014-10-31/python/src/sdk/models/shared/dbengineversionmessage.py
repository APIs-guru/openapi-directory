from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbEngineVersionMessage:
    r"""DbEngineVersionMessage
    Represents the output of <a>DescribeDBEngineVersions</a>.
    """
    
    db_engine_versions: Optional[List[DbEngineVersion]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
