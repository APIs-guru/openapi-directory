from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resource


@dataclass_json
@dataclass
class Evidence:
    assessment_report_selection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentReportSelection' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccountId' }})
    aws_organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsOrganization' }})
    compliance_check: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceCheck' }})
    data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    event_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSource' }})
    evidence_aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceAwsAccountId' }})
    evidence_by_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceByType' }})
    evidence_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceFolderId' }})
    iam_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    resources_included: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesIncluded' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
