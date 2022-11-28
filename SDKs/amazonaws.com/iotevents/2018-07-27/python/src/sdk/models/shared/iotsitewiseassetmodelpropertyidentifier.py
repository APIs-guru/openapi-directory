from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IotSiteWiseAssetModelPropertyIdentifier:
    r"""IotSiteWiseAssetModelPropertyIdentifier
     The asset model property identifer of the input routed from AWS IoT SiteWise. 
    """
    
    asset_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    property_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    
