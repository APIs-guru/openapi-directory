from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compliancetype_enum
from . import evaluationresultidentifier


@dataclass_json
@dataclass
class EvaluationResult:
    annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Annotation' }})
    compliance_type: Optional[compliancetype_enum.ComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    config_rule_invoked_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleInvokedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_result_identifier: Optional[evaluationresultidentifier.EvaluationResultIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationResultIdentifier' }})
    result_recorded_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultRecordedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    result_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultToken' }})
    
