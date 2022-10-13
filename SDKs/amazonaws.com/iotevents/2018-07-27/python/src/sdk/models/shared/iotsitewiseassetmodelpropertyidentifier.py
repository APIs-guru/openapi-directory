from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IotSiteWiseAssetModelPropertyIdentifier:
    asset_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelId' }})
    property_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyId' }})
    
