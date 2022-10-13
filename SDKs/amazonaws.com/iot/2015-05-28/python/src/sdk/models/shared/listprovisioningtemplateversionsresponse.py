from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisioningtemplateversionsummary


@dataclass_json
@dataclass
class ListProvisioningTemplateVersionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    versions: Optional[List[provisioningtemplateversionsummary.ProvisioningTemplateVersionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
