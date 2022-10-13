from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appspeccontent
from . import githublocation
from . import revisionlocationtype_enum
from . import s3location
from . import rawstring


@dataclass_json
@dataclass
class RevisionLocation:
    app_spec_content: Optional[appspeccontent.AppSpecContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appSpecContent' }})
    git_hub_location: Optional[githublocation.GitHubLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitHubLocation' }})
    revision_type: Optional[revisionlocationtype_enum.RevisionLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionType' }})
    s3_location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Location' }})
    string: Optional[rawstring.RawString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'string' }})
    
