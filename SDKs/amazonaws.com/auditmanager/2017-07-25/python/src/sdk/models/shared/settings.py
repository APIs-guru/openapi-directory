from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentreportsdestination
from . import role


@dataclass_json
@dataclass
class Settings:
    default_assessment_reports_destination: Optional[assessmentreportsdestination.AssessmentReportsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAssessmentReportsDestination' }})
    default_process_owners: Optional[List[role.Role]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultProcessOwners' }})
    is_aws_org_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAwsOrgEnabled' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKey' }})
    sns_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snsTopic' }})
    
