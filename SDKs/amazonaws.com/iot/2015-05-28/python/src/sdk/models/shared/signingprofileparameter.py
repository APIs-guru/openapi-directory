from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SigningProfileParameter:
    r"""SigningProfileParameter
    Describes the code-signing profile.
    """
    
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    certificate_path_on_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePathOnDevice') }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    
