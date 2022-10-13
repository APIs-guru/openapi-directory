from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisioningtemplatesummary


@dataclass_json
@dataclass
class ListProvisioningTemplatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    templates: Optional[List[provisioningtemplatesummary.ProvisioningTemplateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templates' }})
    
