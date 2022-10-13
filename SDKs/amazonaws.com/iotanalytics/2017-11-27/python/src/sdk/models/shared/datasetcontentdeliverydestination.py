from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ioteventsdestinationconfiguration
from . import s3destinationconfiguration


@dataclass_json
@dataclass
class DatasetContentDeliveryDestination:
    iot_events_destination_configuration: Optional[ioteventsdestinationconfiguration.IotEventsDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotEventsDestinationConfiguration' }})
    s3_destination_configuration: Optional[s3destinationconfiguration.S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3DestinationConfiguration' }})
    
