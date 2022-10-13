from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import engineversion
from . import resultconfigurationupdates


@dataclass_json
@dataclass
class WorkGroupConfigurationUpdates:
    bytes_scanned_cutoff_per_query: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BytesScannedCutoffPerQuery' }})
    enforce_work_group_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnforceWorkGroupConfiguration' }})
    engine_version: Optional[engineversion.EngineVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    publish_cloud_watch_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublishCloudWatchMetricsEnabled' }})
    remove_bytes_scanned_cutoff_per_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveBytesScannedCutoffPerQuery' }})
    requester_pays_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterPaysEnabled' }})
    result_configuration_updates: Optional[resultconfigurationupdates.ResultConfigurationUpdates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultConfigurationUpdates' }})
    
