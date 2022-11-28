from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeContributorInsightsOutput:
    contributor_insights_rule_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContributorInsightsRuleList') }})
    contributor_insights_status: Optional[ContributorInsightsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContributorInsightsStatus') }})
    failure_exception: Optional[FailureException] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureException') }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    last_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
