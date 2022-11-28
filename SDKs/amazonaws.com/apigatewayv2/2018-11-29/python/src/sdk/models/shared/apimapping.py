from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIMapping:
    r"""APIMapping
    Represents an API mapping.
    """
    
    api_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiId') }})
    stage: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stage') }})
    api_mapping_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiMappingId') }})
    api_mapping_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiMappingKey') }})
    
