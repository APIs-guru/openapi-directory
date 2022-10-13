from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ebsvolumetype_enum


@dataclass_json
@dataclass
class EbsInstanceBlockDeviceSpecification:
    delete_on_termination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteOnTermination' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iops' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotId' }})
    volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeSize' }})
    volume_type: Optional[ebsvolumetype_enum.EbsVolumeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeType' }})
    
