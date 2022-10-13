from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import action


@dataclass_json
@dataclass
class TopicRule:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    aws_iot_sql_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsIotSqlVersion' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_action: Optional[action.Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorAction' }})
    rule_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleDisabled' }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleName' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    
