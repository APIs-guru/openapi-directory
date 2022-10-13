from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webhook


@dataclass_json
@dataclass
class ListWebhooksResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    webhooks: List[webhook.Webhook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    
