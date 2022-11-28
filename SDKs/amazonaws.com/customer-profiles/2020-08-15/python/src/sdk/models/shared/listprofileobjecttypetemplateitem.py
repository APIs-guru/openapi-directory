from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListProfileObjectTypeTemplateItem:
    r"""ListProfileObjectTypeTemplateItem
    A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.
    """
    
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceName') }})
    source_object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObject') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateId') }})
    
