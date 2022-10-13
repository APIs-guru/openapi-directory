from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import administrativeaction
from . import filesystemfailuredetails
from . import filesystemtype_enum
from . import filesystemlifecycle_enum
from . import lustrefilesystemconfiguration
from . import ontapfilesystemconfiguration
from . import storagetype_enum
from . import tag
from . import windowsfilesystemconfiguration


@dataclass_json
@dataclass
class FileSystem:
    administrative_actions: Optional[List[administrativeaction.AdministrativeAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdministrativeActions' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DNSName' }})
    failure_details: Optional[filesystemfailuredetails.FileSystemFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDetails' }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    file_system_type: Optional[filesystemtype_enum.FileSystemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemType' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    lifecycle: Optional[filesystemlifecycle_enum.FileSystemLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    lustre_configuration: Optional[lustrefilesystemconfiguration.LustreFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LustreConfiguration' }})
    network_interface_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkInterfaceIds' }})
    ontap_configuration: Optional[ontapfilesystemconfiguration.OntapFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OntapConfiguration' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    storage_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageCapacity' }})
    storage_type: Optional[storagetype_enum.StorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageType' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    windows_configuration: Optional[windowsfilesystemconfiguration.WindowsFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowsConfiguration' }})
    
