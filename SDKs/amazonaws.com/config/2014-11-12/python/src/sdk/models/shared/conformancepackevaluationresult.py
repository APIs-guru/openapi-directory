from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conformancepackcompliancetype_enum
from . import evaluationresultidentifier


@dataclass_json
@dataclass
class ConformancePackEvaluationResult:
    annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Annotation' }})
    compliance_type: conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    config_rule_invoked_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleInvokedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_result_identifier: evaluationresultidentifier.EvaluationResultIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationResultIdentifier' }})
    result_recorded_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultRecordedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
