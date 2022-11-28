from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SharedImagePermissions:
    r"""SharedImagePermissions
    Describes the permissions that are available to the specified AWS account for a shared image.
    """
    
    image_permissions: ImagePermissions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePermissions') }})
    shared_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedAccountId') }})
    
