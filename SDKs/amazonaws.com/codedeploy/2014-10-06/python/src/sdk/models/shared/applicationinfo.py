from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import computeplatform_enum


@dataclass_json
@dataclass
class ApplicationInfo:
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationId' }})
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    compute_platform: Optional[computeplatform_enum.ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computePlatform' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    git_hub_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitHubAccountName' }})
    linked_to_git_hub: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedToGitHub' }})
    
