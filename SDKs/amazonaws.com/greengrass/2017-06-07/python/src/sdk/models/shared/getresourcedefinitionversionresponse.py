from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcedefinitionversion


@dataclass_json
@dataclass
class GetResourceDefinitionVersionResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimestamp' }})
    definition: Optional[resourcedefinitionversion.ResourceDefinitionVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
