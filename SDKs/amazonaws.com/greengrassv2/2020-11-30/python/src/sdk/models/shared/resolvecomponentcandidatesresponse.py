from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resolvedcomponentversion


@dataclass_json
@dataclass
class ResolveComponentCandidatesResponse:
    resolved_component_versions: Optional[List[resolvedcomponentversion.ResolvedComponentVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedComponentVersions' }})
    
