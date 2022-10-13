from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import typedlinkspecifier


@dataclass_json
@dataclass
class BatchGetLinkAttributes:
    attribute_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeNames' }})
    typed_link_specifier: typedlinkspecifier.TypedLinkSpecifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkSpecifier' }})
    
