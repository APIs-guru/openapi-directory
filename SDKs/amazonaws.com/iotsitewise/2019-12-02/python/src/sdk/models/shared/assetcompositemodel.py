from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetCompositeModel:
    r"""AssetCompositeModel
    Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
