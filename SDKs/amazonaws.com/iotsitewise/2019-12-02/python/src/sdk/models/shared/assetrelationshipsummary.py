from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assethierarchyinfo
from . import assetrelationshiptype_enum


@dataclass_json
@dataclass
class AssetRelationshipSummary:
    hierarchy_info: Optional[assethierarchyinfo.AssetHierarchyInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hierarchyInfo' }})
    relationship_type: assetrelationshiptype_enum.AssetRelationshipTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipType' }})
    
