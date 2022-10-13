from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configexportdeliveryinfo
from . import configexportdeliveryinfo
from . import configstreamdeliveryinfo


@dataclass_json
@dataclass
class DeliveryChannelStatus:
    config_history_delivery_info: Optional[configexportdeliveryinfo.ConfigExportDeliveryInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configHistoryDeliveryInfo' }})
    config_snapshot_delivery_info: Optional[configexportdeliveryinfo.ConfigExportDeliveryInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSnapshotDeliveryInfo' }})
    config_stream_delivery_info: Optional[configstreamdeliveryinfo.ConfigStreamDeliveryInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configStreamDeliveryInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
