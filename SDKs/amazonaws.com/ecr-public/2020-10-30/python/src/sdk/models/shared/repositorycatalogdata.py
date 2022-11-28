from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepositoryCatalogData:
    r"""RepositoryCatalogData
    The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
    """
    
    about_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aboutText') }})
    architectures: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architectures') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    marketplace_certified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceCertified') }})
    operating_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystems') }})
    usage_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageText') }})
    
