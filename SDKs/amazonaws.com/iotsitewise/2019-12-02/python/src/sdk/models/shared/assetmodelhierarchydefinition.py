from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetModelHierarchyDefinition:
    r"""AssetModelHierarchyDefinition
    Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.
    """
    
    child_asset_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childAssetModelId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
