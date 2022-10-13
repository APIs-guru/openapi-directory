from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import customermanagedchannels3storagesummary


@dataclass_json
@dataclass
class ChannelStorageSummary:
    customer_managed_s3: Optional[customermanagedchannels3storagesummary.CustomerManagedChannelS3StorageSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3' }})
    service_managed_s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceManagedS3' }})
    
