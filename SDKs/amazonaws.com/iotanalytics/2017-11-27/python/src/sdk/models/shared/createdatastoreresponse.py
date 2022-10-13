from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import retentionperiod


@dataclass_json
@dataclass
class CreateDatastoreResponse:
    datastore_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreArn' }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreName' }})
    retention_period: Optional[retentionperiod.RetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    
