from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAssetPropertyValueEntry:
    r"""PutAssetPropertyValueEntry
    An asset property value entry containing the following information.
    """
    
    property_values: List[AssetPropertyValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyValues') }})
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    entry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryId') }})
    property_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyAlias') }})
    property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    
