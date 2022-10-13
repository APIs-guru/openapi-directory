from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssessmentEvidenceFolder:
    assessment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentId' }})
    assessment_report_selection_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentReportSelectionCount' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    control_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlId' }})
    control_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlName' }})
    control_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSetId' }})
    data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evidence_aws_service_source_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceAwsServiceSourceCount' }})
    evidence_by_type_compliance_check_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceByTypeComplianceCheckCount' }})
    evidence_by_type_compliance_check_issues_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceByTypeComplianceCheckIssuesCount' }})
    evidence_by_type_configuration_data_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceByTypeConfigurationDataCount' }})
    evidence_by_type_manual_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceByTypeManualCount' }})
    evidence_by_type_user_activity_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceByTypeUserActivityCount' }})
    evidence_resources_included_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceResourcesIncludedCount' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    total_evidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalEvidence' }})
    
