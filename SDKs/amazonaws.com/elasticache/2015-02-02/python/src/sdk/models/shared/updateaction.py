from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class UpdateAction:
    r"""UpdateAction
    The status of the service update for a specific replication group
    """
    
    cache_cluster_id: Optional[str] = field(default=None)
    cache_node_update_status: Optional[List[CacheNodeUpdateStatus]] = field(default=None)
    engine: Optional[str] = field(default=None)
    estimated_update_time: Optional[str] = field(default=None)
    node_group_update_status: Optional[List[NodeGroupUpdateStatus]] = field(default=None)
    nodes_updated: Optional[str] = field(default=None)
    replication_group_id: Optional[str] = field(default=None)
    service_update_name: Optional[str] = field(default=None)
    service_update_recommended_apply_by_date: Optional[datetime] = field(default=None)
    service_update_release_date: Optional[datetime] = field(default=None)
    service_update_severity: Optional[ServiceUpdateSeverityEnum] = field(default=None)
    service_update_status: Optional[ServiceUpdateStatusEnum] = field(default=None)
    service_update_type: Optional[ServiceUpdateTypeEnum] = field(default=None)
    sla_met: Optional[SLAMetEnum] = field(default=None)
    update_action_available_date: Optional[datetime] = field(default=None)
    update_action_status: Optional[UpdateActionStatusEnum] = field(default=None)
    update_action_status_modified_date: Optional[datetime] = field(default=None)
    
