from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificatevalidationrecordstatus_enum


@dataclass_json
@dataclass
class CertificateValidationRecord:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[certificatevalidationrecordstatus_enum.CertificateValidationRecordStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
