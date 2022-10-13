from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import volumelifecycle_enum
from . import lifecycletransitionreason
from . import ontapvolumeconfiguration
from . import tag
from . import volumetype_enum


@dataclass_json
@dataclass
class Volume:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    lifecycle: Optional[volumelifecycle_enum.VolumeLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    lifecycle_transition_reason: Optional[lifecycletransitionreason.LifecycleTransitionReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleTransitionReason' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    ontap_configuration: Optional[ontapvolumeconfiguration.OntapVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OntapConfiguration' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeId' }})
    volume_type: Optional[volumetype_enum.VolumeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeType' }})
    
