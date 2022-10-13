from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contributorinsightsstatus_enum
from . import failureexception


@dataclass_json
@dataclass
class DescribeContributorInsightsOutput:
    contributor_insights_rule_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributorInsightsRuleList' }})
    contributor_insights_status: Optional[contributorinsightsstatus_enum.ContributorInsightsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributorInsightsStatus' }})
    failure_exception: Optional[failureexception.FailureException] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureException' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    last_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
