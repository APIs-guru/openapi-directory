from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assetpropertyvalue


@dataclass_json
@dataclass
class IotSiteWiseAction:
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetId' }})
    entry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryId' }})
    property_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyAlias' }})
    property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyId' }})
    property_value: Optional[assetpropertyvalue.AssetPropertyValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyValue' }})
    
