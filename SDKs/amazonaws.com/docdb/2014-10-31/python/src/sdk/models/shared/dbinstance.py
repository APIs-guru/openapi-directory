from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DbInstance:
    r"""DbInstance
    Detailed information about an instance. 
    """
    
    auto_minor_version_upgrade: Optional[bool] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    backup_retention_period: Optional[int] = field(default=None)
    ca_certificate_identifier: Optional[str] = field(default=None)
    db_cluster_identifier: Optional[str] = field(default=None)
    db_instance_arn: Optional[str] = field(default=None)
    db_instance_class: Optional[str] = field(default=None)
    db_instance_identifier: Optional[str] = field(default=None)
    db_instance_status: Optional[str] = field(default=None)
    db_subnet_group: Optional[DbSubnetGroup] = field(default=None)
    dbi_resource_id: Optional[str] = field(default=None)
    enabled_cloudwatch_logs_exports: Optional[List[str]] = field(default=None)
    endpoint: Optional[Endpoint] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    instance_create_time: Optional[datetime] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    latest_restorable_time: Optional[datetime] = field(default=None)
    pending_modified_values: Optional[PendingModifiedValues] = field(default=None)
    preferred_backup_window: Optional[str] = field(default=None)
    preferred_maintenance_window: Optional[str] = field(default=None)
    promotion_tier: Optional[int] = field(default=None)
    publicly_accessible: Optional[bool] = field(default=None)
    status_infos: Optional[List[DbInstanceStatusInfo]] = field(default=None)
    storage_encrypted: Optional[bool] = field(default=None)
    vpc_security_groups: Optional[List[VpcSecurityGroupMembership]] = field(default=None)
    
