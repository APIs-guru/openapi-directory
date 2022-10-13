from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import retentionconfiguration


@dataclass_json
@dataclass
class PutRetentionConfigurationResponse:
    retention_configuration: Optional[retentionconfiguration.RetentionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionConfiguration' }})
    
