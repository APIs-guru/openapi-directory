from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetentry
from . import datasetcontentstatus


@dataclass_json
@dataclass
class GetDatasetContentResponse:
    entries: Optional[List[datasetentry.DatasetEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    status: Optional[datasetcontentstatus.DatasetContentStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
