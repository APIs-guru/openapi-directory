from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import stage_enum


@dataclass_json
@dataclass
class Branch:
    active_job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeJobId' }})
    associated_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedResources' }})
    backend_environment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendEnvironmentArn' }})
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    branch_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchArn' }})
    branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildSpec' }})
    create_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_domains: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDomains' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationBranch' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_auto_build: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoBuild' }})
    enable_basic_auth: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBasicAuth' }})
    enable_notification: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableNotification' }})
    enable_performance_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePerformanceMode' }})
    enable_pull_request_preview: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePullRequestPreview' }})
    environment_variables: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    framework: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framework' }})
    pull_request_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestEnvironmentName' }})
    source_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceBranch' }})
    stage: stage_enum.StageEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUrl' }})
    total_number_of_jobs: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalNumberOfJobs' }})
    ttl: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
