from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MatchmakingRuleSet:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rule_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleSetArn' }})
    rule_set_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleSetBody' }})
    rule_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleSetName' }})
    
