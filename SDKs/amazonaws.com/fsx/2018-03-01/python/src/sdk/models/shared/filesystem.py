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
class FileSystem:
    r"""FileSystem
    A description of a specific Amazon FSx file system.
    """
    
    administrative_actions: Optional[List[AdministrativeAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdministrativeActions') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DNSName') }})
    failure_details: Optional[FileSystemFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDetails') }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    file_system_type: Optional[FileSystemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemType') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    lifecycle: Optional[FileSystemLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lifecycle') }})
    lustre_configuration: Optional[LustreFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LustreConfiguration') }})
    network_interface_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkInterfaceIds') }})
    ontap_configuration: Optional[OntapFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OntapConfiguration') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    storage_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageCapacity') }})
    storage_type: Optional[StorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageType') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    windows_configuration: Optional[WindowsFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowsConfiguration') }})
    
