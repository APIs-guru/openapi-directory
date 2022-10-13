from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import type_enum


@dataclass_json
@dataclass
class Grantee:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    type: type_enum.TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'URI' }})
    
