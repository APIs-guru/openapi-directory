from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFleetMetricResponse:
    aggregation_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationField') }})
    aggregation_type: Optional[AggregationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationType') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexName') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricArn') }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryVersion') }})
    unit: Optional[FleetMetricUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
