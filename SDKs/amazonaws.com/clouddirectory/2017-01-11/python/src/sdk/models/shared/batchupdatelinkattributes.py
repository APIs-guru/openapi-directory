from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import linkattributeupdate
from . import typedlinkspecifier


@dataclass_json
@dataclass
class BatchUpdateLinkAttributes:
    attribute_updates: List[linkattributeupdate.LinkAttributeUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeUpdates' }})
    typed_link_specifier: typedlinkspecifier.TypedLinkSpecifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkSpecifier' }})
    
