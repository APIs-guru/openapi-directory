from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import svmactivedirectoryconfiguration
from . import svmendpoints
from . import storagevirtualmachinelifecycle_enum
from . import lifecycletransitionreason
from . import storagevirtualmachinerootvolumesecuritystyle_enum
from . import storagevirtualmachinesubtype_enum
from . import tag


@dataclass_json
@dataclass
class StorageVirtualMachine:
    active_directory_configuration: Optional[svmactivedirectoryconfiguration.SvmActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveDirectoryConfiguration' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoints: Optional[svmendpoints.SvmEndpoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoints' }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    lifecycle: Optional[storagevirtualmachinelifecycle_enum.StorageVirtualMachineLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    lifecycle_transition_reason: Optional[lifecycletransitionreason.LifecycleTransitionReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleTransitionReason' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    root_volume_security_style: Optional[storagevirtualmachinerootvolumesecuritystyle_enum.StorageVirtualMachineRootVolumeSecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootVolumeSecurityStyle' }})
    storage_virtual_machine_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachineId' }})
    subtype: Optional[storagevirtualmachinesubtype_enum.StorageVirtualMachineSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subtype' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UUID' }})
    
