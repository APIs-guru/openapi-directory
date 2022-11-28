from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIPagedResponseMetadata:
    r"""APIPagedResponseMetadata
    Metadata for the paged response
    """
    
    limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    offset: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Offset') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
