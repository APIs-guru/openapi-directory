from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TruststoreItems:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    entry_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryType' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    not_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notAfter' }})
    not_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notBefore' }})
    serial_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
