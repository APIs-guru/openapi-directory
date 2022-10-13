from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import standardidentifier_enum


@dataclass_json
@dataclass
class ObjectTypeKey:
    field_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldNames' }})
    standard_identifiers: Optional[List[standardidentifier_enum.StandardIdentifierEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardIdentifiers' }})
    
