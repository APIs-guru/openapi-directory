from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryptionconfiguration


@dataclass_json
@dataclass
class ResultConfiguration:
    encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfiguration' }})
    output_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocation' }})
    
