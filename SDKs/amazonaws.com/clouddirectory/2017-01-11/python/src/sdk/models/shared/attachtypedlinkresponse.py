from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import typedlinkspecifier


@dataclass_json
@dataclass
class AttachTypedLinkResponse:
    typed_link_specifier: Optional[typedlinkspecifier.TypedLinkSpecifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkSpecifier' }})
    
