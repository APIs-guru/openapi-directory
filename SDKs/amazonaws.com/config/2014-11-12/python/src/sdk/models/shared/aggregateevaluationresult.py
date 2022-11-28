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
class AggregateEvaluationResult:
    r"""AggregateEvaluationResult
    The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. 
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Annotation') }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegion') }})
    compliance_type: Optional[ComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    config_rule_invoked_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleInvokedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_result_identifier: Optional[EvaluationResultIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationResultIdentifier') }})
    result_recorded_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultRecordedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
