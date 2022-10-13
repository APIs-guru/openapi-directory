from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iotsitewiseassetmodelpropertyidentifier


@dataclass_json
@dataclass
class IotSiteWiseInputIdentifier:
    iot_site_wise_asset_model_property_identifier: Optional[iotsitewiseassetmodelpropertyidentifier.IotSiteWiseAssetModelPropertyIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotSiteWiseAssetModelPropertyIdentifier' }})
    
