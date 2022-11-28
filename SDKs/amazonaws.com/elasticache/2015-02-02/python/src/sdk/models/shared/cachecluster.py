from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class CacheCluster:
    r"""CacheCluster
    Contains all of the attributes of a specific cluster.
    """
    
    arn: Optional[str] = field(default=None)
    at_rest_encryption_enabled: Optional[bool] = field(default=None)
    auth_token_enabled: Optional[bool] = field(default=None)
    auth_token_last_modified_date: Optional[datetime] = field(default=None)
    auto_minor_version_upgrade: Optional[bool] = field(default=None)
    cache_cluster_create_time: Optional[datetime] = field(default=None)
    cache_cluster_id: Optional[str] = field(default=None)
    cache_cluster_status: Optional[str] = field(default=None)
    cache_node_type: Optional[str] = field(default=None)
    cache_nodes: Optional[List[CacheNode]] = field(default=None)
    cache_parameter_group: Optional[CacheParameterGroupStatus] = field(default=None)
    cache_security_groups: Optional[List[CacheSecurityGroupMembership]] = field(default=None)
    cache_subnet_group_name: Optional[str] = field(default=None)
    client_download_landing_page: Optional[str] = field(default=None)
    configuration_endpoint: Optional[Endpoint] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    log_delivery_configurations: Optional[List[LogDeliveryConfiguration]] = field(default=None)
    notification_configuration: Optional[NotificationConfiguration] = field(default=None)
    num_cache_nodes: Optional[int] = field(default=None)
    pending_modified_values: Optional[PendingModifiedValues] = field(default=None)
    preferred_availability_zone: Optional[str] = field(default=None)
    preferred_maintenance_window: Optional[str] = field(default=None)
    preferred_outpost_arn: Optional[str] = field(default=None)
    replication_group_id: Optional[str] = field(default=None)
    replication_group_log_delivery_enabled: Optional[bool] = field(default=None)
    security_groups: Optional[List[SecurityGroupMembership]] = field(default=None)
    snapshot_retention_limit: Optional[int] = field(default=None)
    snapshot_window: Optional[str] = field(default=None)
    transit_encryption_enabled: Optional[bool] = field(default=None)
    
