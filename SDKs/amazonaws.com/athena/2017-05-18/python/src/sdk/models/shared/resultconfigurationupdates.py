from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryptionconfiguration


@dataclass_json
@dataclass
class ResultConfigurationUpdates:
    encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfiguration' }})
    output_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocation' }})
    remove_encryption_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveEncryptionConfiguration' }})
    remove_output_location: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveOutputLocation' }})
    
