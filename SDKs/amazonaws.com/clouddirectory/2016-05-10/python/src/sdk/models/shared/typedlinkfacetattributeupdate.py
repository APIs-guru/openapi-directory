from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import updateactiontype_enum
from . import typedlinkattributedefinition


@dataclass_json
@dataclass
class TypedLinkFacetAttributeUpdate:
    action: updateactiontype_enum.UpdateActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    attribute: typedlinkattributedefinition.TypedLinkAttributeDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attribute' }})
    
