from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datasetactionsummary
from . import datasetstatus_enum
from . import datasettrigger


@dataclass_json
@dataclass
class DatasetSummary:
    actions: Optional[List[datasetactionsummary.DatasetActionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetName' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[datasetstatus_enum.DatasetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    triggers: Optional[List[datasettrigger.DatasetTrigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    
