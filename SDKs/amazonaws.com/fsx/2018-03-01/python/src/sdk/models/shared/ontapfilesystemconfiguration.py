from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OntapFileSystemConfiguration:
    r"""OntapFileSystemConfiguration
    Configuration for the FSx for NetApp ONTAP file system.
    """
    
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomaticBackupRetentionDays') }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyAutomaticBackupStartTime') }})
    deployment_type: Optional[OntapDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    disk_iops_configuration: Optional[DiskIopsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiskIopsConfiguration') }})
    endpoint_ip_address_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointIpAddressRange') }})
    endpoints: Optional[FileSystemEndpoints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    preferred_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredSubnetId') }})
    route_table_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableIds') }})
    throughput_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThroughputCapacity') }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceStartTime') }})
    
