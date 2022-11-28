from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyDbClusterActionEnum(str, Enum):
    MODIFY_DB_CLUSTER = "ModifyDBCluster"


@dataclass
class GetModifyDbClusterCloudwatchLogsExportConfiguration:
    r"""GetModifyDbClusterCloudwatchLogsExportConfiguration
    <p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>
    """
    
    disable_log_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DisableLogTypes' }})
    enable_log_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'EnableLogTypes' }})
    
class GetModifyDbClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbClusterQueryParams:
    action: GetModifyDbClusterActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'DBClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyDbClusterVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    apply_immediately: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    backup_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'BackupRetentionPeriod', 'style': 'form', 'explode': True }})
    cloudwatch_logs_export_configuration: Optional[GetModifyDbClusterCloudwatchLogsExportConfiguration] = field(default=None, metadata={'query_param': { 'field_name': 'CloudwatchLogsExportConfiguration', 'style': 'form', 'explode': True }})
    db_cluster_parameter_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterParameterGroupName', 'style': 'form', 'explode': True }})
    deletion_protection: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DeletionProtection', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    master_user_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MasterUserPassword', 'style': 'form', 'explode': True }})
    new_db_cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewDBClusterIdentifier', 'style': 'form', 'explode': True }})
    port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Port', 'style': 'form', 'explode': True }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredBackupWindow', 'style': 'form', 'explode': True }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredMaintenanceWindow', 'style': 'form', 'explode': True }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbClusterRequest:
    headers: GetModifyDbClusterHeaders = field()
    query_params: GetModifyDbClusterQueryParams = field()
    

@dataclass
class GetModifyDbClusterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
