from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainJoinInfo:
    directory_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryName' }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationalUnitDistinguishedName' }})
    
