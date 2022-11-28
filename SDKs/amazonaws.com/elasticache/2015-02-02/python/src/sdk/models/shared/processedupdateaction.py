from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ProcessedUpdateAction:
    r"""ProcessedUpdateAction
    Update action that has been processed for the corresponding apply/stop request
    """
    
    cache_cluster_id: Optional[str] = field(default=None)
    replication_group_id: Optional[str] = field(default=None)
    service_update_name: Optional[str] = field(default=None)
    update_action_status: Optional[UpdateActionStatusEnum] = field(default=None)
    
