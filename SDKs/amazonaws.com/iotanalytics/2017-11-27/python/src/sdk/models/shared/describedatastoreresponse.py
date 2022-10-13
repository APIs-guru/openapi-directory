from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datastore
from . import datastorestatistics


@dataclass_json
@dataclass
class DescribeDatastoreResponse:
    datastore: Optional[datastore.Datastore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastore' }})
    statistics: Optional[datastorestatistics.DatastoreStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    
