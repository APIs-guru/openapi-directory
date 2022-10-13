from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compliance


@dataclass_json
@dataclass
class ComplianceByResource:
    compliance: Optional[compliance.Compliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compliance' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
