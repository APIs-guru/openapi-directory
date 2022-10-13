from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import efsauthorizationconfig
from . import efstransitencryption_enum


@dataclass_json
@dataclass
class EfsVolumeConfiguration:
    authorization_config: Optional[efsauthorizationconfig.EfsAuthorizationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationConfig' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSystemId' }})
    root_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootDirectory' }})
    transit_encryption: Optional[efstransitencryption_enum.EfsTransitEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitEncryption' }})
    transit_encryption_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitEncryptionPort' }})
    
