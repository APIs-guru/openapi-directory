from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsGlobalImageCategory:
    r"""GlobalResourcesSharedModelsGlobalImageCategory
    An image category from the Global Image library.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    
