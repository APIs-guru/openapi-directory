from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReplicationGroupPendingModifiedValues:
    r"""ReplicationGroupPendingModifiedValues
    The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.
    """
    
    auth_token_status: Optional[AuthTokenUpdateStatusEnum] = field(default=None)
    automatic_failover_status: Optional[PendingAutomaticFailoverStatusEnum] = field(default=None)
    log_delivery_configurations: Optional[List[PendingLogDeliveryConfiguration]] = field(default=None)
    primary_cluster_id: Optional[str] = field(default=None)
    resharding: Optional[ReshardingStatus] = field(default=None)
    user_groups: Optional[UserGroupsUpdateStatus] = field(default=None)
    
