from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StorageVirtualMachine:
    r"""StorageVirtualMachine
    Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuraton.
    """
    
    active_directory_configuration: Optional[SvmActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveDirectoryConfiguration') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoints: Optional[SvmEndpoints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    lifecycle: Optional[StorageVirtualMachineLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lifecycle') }})
    lifecycle_transition_reason: Optional[LifecycleTransitionReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleTransitionReason') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    root_volume_security_style: Optional[StorageVirtualMachineRootVolumeSecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootVolumeSecurityStyle') }})
    storage_virtual_machine_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageVirtualMachineId') }})
    subtype: Optional[StorageVirtualMachineSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subtype') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UUID') }})
    
