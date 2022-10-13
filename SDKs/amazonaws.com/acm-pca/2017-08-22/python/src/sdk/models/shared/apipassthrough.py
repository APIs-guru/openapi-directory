from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import extensions
from . import asn1subject


@dataclass_json
@dataclass
class APIPassthrough:
    extensions: Optional[extensions.Extensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Extensions' }})
    subject: Optional[asn1subject.Asn1Subject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    
