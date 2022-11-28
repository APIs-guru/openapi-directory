from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbEngineVersion:
    r"""DbEngineVersion
     Detailed information about an engine version. 
    """
    
    db_engine_description: Optional[str] = field(default=None)
    db_engine_version_description: Optional[str] = field(default=None)
    db_parameter_group_family: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    exportable_log_types: Optional[List[str]] = field(default=None)
    supports_log_exports_to_cloudwatch_logs: Optional[bool] = field(default=None)
    valid_upgrade_target: Optional[List[UpgradeTarget]] = field(default=None)
    
