from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class DbClusterSnapshot:
    r"""DbClusterSnapshot
    Detailed information about a cluster snapshot. 
    """
    
    availability_zones: Optional[List[str]] = field(default=None)
    cluster_create_time: Optional[datetime] = field(default=None)
    db_cluster_identifier: Optional[str] = field(default=None)
    db_cluster_snapshot_arn: Optional[str] = field(default=None)
    db_cluster_snapshot_identifier: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    master_username: Optional[str] = field(default=None)
    percent_progress: Optional[int] = field(default=None)
    port: Optional[int] = field(default=None)
    snapshot_create_time: Optional[datetime] = field(default=None)
    snapshot_type: Optional[str] = field(default=None)
    source_db_cluster_snapshot_arn: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    storage_encrypted: Optional[bool] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
