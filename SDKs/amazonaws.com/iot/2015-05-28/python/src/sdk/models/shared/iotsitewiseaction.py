from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import putassetpropertyvalueentry


@dataclass_json
@dataclass
class IotSiteWiseAction:
    put_asset_property_value_entries: List[putassetpropertyvalueentry.PutAssetPropertyValueEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'putAssetPropertyValueEntries' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
