from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetModelHierarchyDefinition:
    child_asset_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childAssetModelId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
