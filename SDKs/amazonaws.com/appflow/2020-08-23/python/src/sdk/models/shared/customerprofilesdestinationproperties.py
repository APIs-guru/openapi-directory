from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerProfilesDestinationProperties:
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    object_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTypeName' }})
    
