from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import targettype_enum


@dataclass_json
@dataclass
class ListAttributesRequest:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeName' }})
    attribute_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeValue' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    target_type: targettype_enum.TargetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetType' }})
    
