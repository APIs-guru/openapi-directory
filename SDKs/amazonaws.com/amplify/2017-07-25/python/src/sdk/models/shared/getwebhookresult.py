from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import webhook


@dataclass_json
@dataclass
class GetWebhookResult:
    webhook: webhook.Webhook = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
