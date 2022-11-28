from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IotSiteWiseAction:
    r"""IotSiteWiseAction
    Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties.
    """
    
    put_asset_property_value_entries: List[PutAssetPropertyValueEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('putAssetPropertyValueEntries') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
