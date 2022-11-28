from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetRelationshipSummary:
    r"""AssetRelationshipSummary
    Contains information about assets that are related to one another.
    """
    
    relationship_type: AssetRelationshipTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipType') }})
    hierarchy_info: Optional[AssetHierarchyInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyInfo') }})
    
