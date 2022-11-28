from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class PendingModifiedValues:
    r"""PendingModifiedValues
    A group of settings that are applied to the cluster in the future, or that are currently being applied.
    """
    
    auth_token_status: Optional[AuthTokenUpdateStatusEnum] = field(default=None)
    cache_node_ids_to_remove: Optional[List[str]] = field(default=None)
    cache_node_type: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    log_delivery_configurations: Optional[List[PendingLogDeliveryConfiguration]] = field(default=None)
    num_cache_nodes: Optional[int] = field(default=None)
    
