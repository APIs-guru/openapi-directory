from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetHierarchyInfo:
    r"""AssetHierarchyInfo
    Contains information about a parent asset and a child asset that are related through an asset hierarchy.
    """
    
    child_asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childAssetId') }})
    parent_asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentAssetId') }})
    
