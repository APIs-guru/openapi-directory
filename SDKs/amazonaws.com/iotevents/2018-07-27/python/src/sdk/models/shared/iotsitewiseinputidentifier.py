from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IotSiteWiseInputIdentifier:
    r"""IotSiteWiseInputIdentifier
     The identifer of the input routed from AWS IoT SiteWise. 
    """
    
    iot_site_wise_asset_model_property_identifier: Optional[IotSiteWiseAssetModelPropertyIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWiseAssetModelPropertyIdentifier') }})
    
