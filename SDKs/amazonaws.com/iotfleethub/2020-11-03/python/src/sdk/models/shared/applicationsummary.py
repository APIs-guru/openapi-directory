from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import applicationstate_enum


@dataclass_json
@dataclass
class ApplicationSummary:
    application_creation_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationCreationDate' }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationDescription' }})
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationId' }})
    application_last_update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationLastUpdateDate' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    application_state: Optional[applicationstate_enum.ApplicationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationState' }})
    application_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationUrl' }})
    
