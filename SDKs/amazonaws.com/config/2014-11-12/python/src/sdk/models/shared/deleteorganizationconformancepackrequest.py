from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteOrganizationConformancePackRequest:
    organization_conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackName' }})
    
