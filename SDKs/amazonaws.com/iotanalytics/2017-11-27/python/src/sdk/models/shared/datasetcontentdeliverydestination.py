from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetContentDeliveryDestination:
    r"""DatasetContentDeliveryDestination
    The destination to which dataset contents are delivered.
    """
    
    iot_events_destination_configuration: Optional[IotEventsDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotEventsDestinationConfiguration') }})
    s3_destination_configuration: Optional[S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DestinationConfiguration') }})
    
