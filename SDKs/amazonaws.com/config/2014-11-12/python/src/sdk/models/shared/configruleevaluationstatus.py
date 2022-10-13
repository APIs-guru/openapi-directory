from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigRuleEvaluationStatus:
    config_rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleArn' }})
    config_rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleId' }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    first_activated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstActivatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_evaluation_started: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstEvaluationStarted' }})
    last_deactivated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastDeactivatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastErrorCode' }})
    last_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastErrorMessage' }})
    last_failed_evaluation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastFailedEvaluationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_failed_invocation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastFailedInvocationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_successful_evaluation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSuccessfulEvaluationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_successful_invocation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSuccessfulInvocationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
