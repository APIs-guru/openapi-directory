from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetFrameMetricDataResponse:
    r"""BatchGetFrameMetricDataResponse
    The structure representing the BatchGetFrameMetricDataResponse.
    """
    
    end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: List[TimestampStructure] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimes') }})
    frame_metric_data: List[FrameMetricDatum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameMetricData') }})
    resolution: AggregationPeriodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    unprocessed_end_times: dict[str, List[TimestampStructure]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unprocessedEndTimes') }})
    
