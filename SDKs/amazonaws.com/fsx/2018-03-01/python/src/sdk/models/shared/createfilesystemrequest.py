from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filesystemtype_enum
from . import createfilesystemlustreconfiguration
from . import createfilesystemontapconfiguration
from . import storagetype_enum
from . import tag
from . import createfilesystemwindowsconfiguration


@dataclass_json
@dataclass
class CreateFileSystemRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    file_system_type: filesystemtype_enum.FileSystemTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemType' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    lustre_configuration: Optional[createfilesystemlustreconfiguration.CreateFileSystemLustreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LustreConfiguration' }})
    ontap_configuration: Optional[createfilesystemontapconfiguration.CreateFileSystemOntapConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OntapConfiguration' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    storage_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageCapacity' }})
    storage_type: Optional[storagetype_enum.StorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageType' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    windows_configuration: Optional[createfilesystemwindowsconfiguration.CreateFileSystemWindowsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowsConfiguration' }})
    
