from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import encryptionconfiguration


@dataclass_json
@dataclass
class CreateSecurityConfigurationRequest:
    encryption_configuration: encryptionconfiguration.EncryptionConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
