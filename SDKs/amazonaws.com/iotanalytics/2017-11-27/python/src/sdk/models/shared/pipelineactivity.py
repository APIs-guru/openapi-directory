from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PipelineActivity:
    r"""PipelineActivity
    An activity that performs a transformation on a message.
    """
    
    add_attributes: Optional[AddAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addAttributes') }})
    channel: Optional[ChannelActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    datastore: Optional[DatastoreActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastore') }})
    device_registry_enrich: Optional[DeviceRegistryEnrichActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceRegistryEnrich') }})
    device_shadow_enrich: Optional[DeviceShadowEnrichActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceShadowEnrich') }})
    filter: Optional[FilterActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    lambda_: Optional[LambdaActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambda') }})
    math: Optional[MathActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('math') }})
    remove_attributes: Optional[RemoveAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAttributes') }})
    select_attributes: Optional[SelectAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectAttributes') }})
    
