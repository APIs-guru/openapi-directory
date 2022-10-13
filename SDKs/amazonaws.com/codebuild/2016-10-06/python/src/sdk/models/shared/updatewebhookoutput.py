from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import webhook


@dataclass_json
@dataclass
class UpdateWebhookOutput:
    webhook: Optional[webhook.Webhook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
