from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagListEntry:
    r"""TagListEntry
    Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code> returns an array that contains a list of tasks when the <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html\">ListTagsForResource</a> operation is called.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
