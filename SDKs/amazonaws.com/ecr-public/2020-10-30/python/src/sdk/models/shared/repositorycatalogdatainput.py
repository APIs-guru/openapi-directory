from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepositoryCatalogDataInput:
    r"""RepositoryCatalogDataInput
    An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
    """
    
    about_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aboutText') }})
    architectures: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architectures') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    logo_image_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoImageBlob') }})
    operating_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystems') }})
    usage_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageText') }})
    
