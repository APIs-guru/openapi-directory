from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listwebhookitem


@dataclass_json
@dataclass
class ListWebhooksOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    webhooks: Optional[List[listwebhookitem.ListWebhookItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    
