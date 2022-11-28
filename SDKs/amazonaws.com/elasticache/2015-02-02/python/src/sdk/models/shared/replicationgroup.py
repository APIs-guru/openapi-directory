from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReplicationGroup:
    r"""ReplicationGroup
    Contains all of the attributes of a specific Redis replication group.
    """
    
    arn: Optional[str] = field(default=None)
    at_rest_encryption_enabled: Optional[bool] = field(default=None)
    auth_token_enabled: Optional[bool] = field(default=None)
    auth_token_last_modified_date: Optional[datetime] = field(default=None)
    automatic_failover: Optional[AutomaticFailoverStatusEnum] = field(default=None)
    cache_node_type: Optional[str] = field(default=None)
    cluster_enabled: Optional[bool] = field(default=None)
    configuration_endpoint: Optional[Endpoint] = field(default=None)
    description: Optional[str] = field(default=None)
    global_replication_group_info: Optional[GlobalReplicationGroupInfo] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    log_delivery_configurations: Optional[List[LogDeliveryConfiguration]] = field(default=None)
    member_clusters: Optional[List[str]] = field(default=None)
    member_clusters_outpost_arns: Optional[List[str]] = field(default=None)
    multi_az: Optional[MultiAzStatusEnum] = field(default=None)
    node_groups: Optional[List[NodeGroup]] = field(default=None)
    pending_modified_values: Optional[ReplicationGroupPendingModifiedValues] = field(default=None)
    replication_group_create_time: Optional[datetime] = field(default=None)
    replication_group_id: Optional[str] = field(default=None)
    snapshot_retention_limit: Optional[int] = field(default=None)
    snapshot_window: Optional[str] = field(default=None)
    snapshotting_cluster_id: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    transit_encryption_enabled: Optional[bool] = field(default=None)
    user_group_ids: Optional[List[str]] = field(default=None)
    
