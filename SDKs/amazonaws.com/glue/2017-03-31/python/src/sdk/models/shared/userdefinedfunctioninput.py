from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import principaltype_enum
from . import resourceuri


@dataclass_json
@dataclass
class UserDefinedFunctionInput:
    class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClassName' }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerName' }})
    owner_type: Optional[principaltype_enum.PrincipalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerType' }})
    resource_uris: Optional[List[resourceuri.ResourceURI]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceUris' }})
    
