from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetcontentdeliverydestination


@dataclass_json
@dataclass
class DatasetContentDeliveryRule:
    destination: datasetcontentdeliverydestination.DatasetContentDeliveryDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    entry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryName' }})
    
