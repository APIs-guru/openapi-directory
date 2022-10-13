from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addattributesactivity
from . import channelactivity
from . import datastoreactivity
from . import deviceregistryenrichactivity
from . import deviceshadowenrichactivity
from . import filteractivity
from . import lambdaactivity
from . import mathactivity
from . import removeattributesactivity
from . import selectattributesactivity


@dataclass_json
@dataclass
class PipelineActivity:
    add_attributes: Optional[addattributesactivity.AddAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addAttributes' }})
    channel: Optional[channelactivity.ChannelActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    datastore: Optional[datastoreactivity.DatastoreActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastore' }})
    device_registry_enrich: Optional[deviceregistryenrichactivity.DeviceRegistryEnrichActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceRegistryEnrich' }})
    device_shadow_enrich: Optional[deviceshadowenrichactivity.DeviceShadowEnrichActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceShadowEnrich' }})
    filter: Optional[filteractivity.FilterActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    lambda_: Optional[lambdaactivity.LambdaActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambda' }})
    math: Optional[mathactivity.MathActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'math' }})
    remove_attributes: Optional[removeattributesactivity.RemoveAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeAttributes' }})
    select_attributes: Optional[selectattributesactivity.SelectAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectAttributes' }})
    
