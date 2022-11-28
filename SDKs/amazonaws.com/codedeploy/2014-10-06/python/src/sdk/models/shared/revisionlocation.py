from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RevisionLocation:
    r"""RevisionLocation
    Information about the location of an application revision.
    """
    
    app_spec_content: Optional[AppSpecContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appSpecContent') }})
    git_hub_location: Optional[GitHubLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitHubLocation') }})
    revision_type: Optional[RevisionLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionType') }})
    s3_location: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    string: Optional[RawString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('string') }})
    
