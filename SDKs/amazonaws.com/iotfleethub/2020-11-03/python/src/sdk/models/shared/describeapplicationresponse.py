from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import applicationstate_enum


@dataclass_json
@dataclass
class DescribeApplicationResponse:
    application_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationArn' }})
    application_creation_date: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationCreationDate' }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationDescription' }})
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationId' }})
    application_last_update_date: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationLastUpdateDate' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    application_state: applicationstate_enum.ApplicationStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationState' }})
    application_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationUrl' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    sso_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssoClientId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
