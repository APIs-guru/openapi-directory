from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VolumeConfiguration:
    volume_baseline_iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeBaselineIOPS' }})
    volume_baseline_throughput: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeBaselineThroughput' }})
    volume_burst_iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeBurstIOPS' }})
    volume_burst_throughput: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeBurstThroughput' }})
    volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeSize' }})
    volume_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeType' }})
    
