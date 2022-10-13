from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import webhookdefinition


@dataclass_json
@dataclass
class PutWebhookInput:
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    webhook: webhookdefinition.WebhookDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
