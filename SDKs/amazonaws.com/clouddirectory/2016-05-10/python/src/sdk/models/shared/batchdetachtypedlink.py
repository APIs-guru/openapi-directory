from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import typedlinkspecifier


@dataclass_json
@dataclass
class BatchDetachTypedLink:
    typed_link_specifier: typedlinkspecifier.TypedLinkSpecifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkSpecifier' }})
    
