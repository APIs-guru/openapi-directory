from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CacheNodeUpdateStatus:
    r"""CacheNodeUpdateStatus
    The status of the service update on the cache node
    """
    
    cache_node_id: Optional[str] = field(default=None)
    node_deletion_date: Optional[datetime] = field(default=None)
    node_update_end_date: Optional[datetime] = field(default=None)
    node_update_initiated_by: Optional[NodeUpdateInitiatedByEnum] = field(default=None)
    node_update_initiated_date: Optional[datetime] = field(default=None)
    node_update_start_date: Optional[datetime] = field(default=None)
    node_update_status: Optional[NodeUpdateStatusEnum] = field(default=None)
    node_update_status_modified_date: Optional[datetime] = field(default=None)
    
