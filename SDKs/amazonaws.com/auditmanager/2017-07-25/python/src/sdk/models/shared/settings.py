from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Settings:
    r"""Settings
     The settings object that holds all supported Audit Manager settings. 
    """
    
    default_assessment_reports_destination: Optional[AssessmentReportsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAssessmentReportsDestination') }})
    default_process_owners: Optional[List[Role]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultProcessOwners') }})
    is_aws_org_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAwsOrgEnabled') }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    sns_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopic') }})
    
