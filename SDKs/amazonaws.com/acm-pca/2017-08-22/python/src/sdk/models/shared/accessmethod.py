from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accessmethodtype_enum


@dataclass_json
@dataclass
class AccessMethod:
    access_method_type: Optional[accessmethodtype_enum.AccessMethodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessMethodType' }})
    custom_object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomObjectIdentifier' }})
    
