from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImagePackage:
    r"""ImagePackage
    Represents a package installed on an Image Builder image.
    """
    
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    package_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageVersion') }})
    
