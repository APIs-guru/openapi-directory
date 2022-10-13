from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ontapdeploymenttype_enum
from . import diskiopsconfiguration


@dataclass_json
@dataclass
class CreateFileSystemOntapConfiguration:
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticBackupRetentionDays' }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyAutomaticBackupStartTime' }})
    deployment_type: ontapdeploymenttype_enum.OntapDeploymentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentType' }})
    disk_iops_configuration: Optional[diskiopsconfiguration.DiskIopsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiskIopsConfiguration' }})
    endpoint_ip_address_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointIpAddressRange' }})
    fsx_admin_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FsxAdminPassword' }})
    preferred_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredSubnetId' }})
    route_table_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableIds' }})
    throughput_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThroughputCapacity' }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceStartTime' }})
    
