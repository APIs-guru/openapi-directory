from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import timestampstructure
from . import framemetricdatum
from . import aggregationperiod_enum
from . import timestampstructure


@dataclass_json
@dataclass
class BatchGetFrameMetricDataResponse:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: List[timestampstructure.TimestampStructure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimes' }})
    frame_metric_data: List[framemetricdatum.FrameMetricDatum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameMetricData' }})
    resolution: aggregationperiod_enum.AggregationPeriodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    unprocessed_end_times: dict[str, List[timestampstructure.TimestampStructure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unprocessedEndTimes' }})
    
