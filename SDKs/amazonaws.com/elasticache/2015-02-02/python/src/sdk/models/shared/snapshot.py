from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Snapshot:
    r"""Snapshot
    Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
    """
    
    arn: Optional[str] = field(default=None)
    auto_minor_version_upgrade: Optional[bool] = field(default=None)
    automatic_failover: Optional[AutomaticFailoverStatusEnum] = field(default=None)
    cache_cluster_create_time: Optional[datetime] = field(default=None)
    cache_cluster_id: Optional[str] = field(default=None)
    cache_node_type: Optional[str] = field(default=None)
    cache_parameter_group_name: Optional[str] = field(default=None)
    cache_subnet_group_name: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    node_snapshots: Optional[List[NodeSnapshot]] = field(default=None)
    num_cache_nodes: Optional[int] = field(default=None)
    num_node_groups: Optional[int] = field(default=None)
    port: Optional[int] = field(default=None)
    preferred_availability_zone: Optional[str] = field(default=None)
    preferred_maintenance_window: Optional[str] = field(default=None)
    preferred_outpost_arn: Optional[str] = field(default=None)
    replication_group_description: Optional[str] = field(default=None)
    replication_group_id: Optional[str] = field(default=None)
    snapshot_name: Optional[str] = field(default=None)
    snapshot_retention_limit: Optional[int] = field(default=None)
    snapshot_source: Optional[str] = field(default=None)
    snapshot_status: Optional[str] = field(default=None)
    snapshot_window: Optional[str] = field(default=None)
    topic_arn: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
