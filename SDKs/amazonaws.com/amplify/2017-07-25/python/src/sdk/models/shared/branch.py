from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Branch:
    r"""Branch
     The branch for an Amplify app, which maps to a third-party repository branch. 
    """
    
    active_job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeJobId') }})
    branch_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchArn') }})
    branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    create_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_domains: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDomains') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_auto_build: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoBuild') }})
    enable_basic_auth: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBasicAuth') }})
    enable_notification: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableNotification') }})
    enable_pull_request_preview: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePullRequestPreview') }})
    environment_variables: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    framework: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    stage: StageEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    total_number_of_jobs: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalNumberOfJobs') }})
    ttl: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    associated_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedResources') }})
    backend_environment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendEnvironmentArn') }})
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildSpec') }})
    destination_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationBranch') }})
    enable_performance_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePerformanceMode') }})
    pull_request_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestEnvironmentName') }})
    source_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceBranch') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    
