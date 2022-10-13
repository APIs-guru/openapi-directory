from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipelineactivity
from . import reprocessingsummary


@dataclass_json
@dataclass
class Pipeline:
    activities: Optional[List[pipelineactivity.PipelineActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reprocessing_summaries: Optional[List[reprocessingsummary.ReprocessingSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reprocessingSummaries' }})
    
