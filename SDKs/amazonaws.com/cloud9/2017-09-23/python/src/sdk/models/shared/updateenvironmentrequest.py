from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import managedcredentialsaction_enum


@dataclass_json
@dataclass
class UpdateEnvironmentRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    managed_credentials_action: Optional[managedcredentialsaction_enum.ManagedCredentialsActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedCredentialsAction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
