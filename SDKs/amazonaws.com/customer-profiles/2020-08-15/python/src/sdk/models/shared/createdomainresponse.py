from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import matchingresponse


@dataclass_json
@dataclass
class CreateDomainResponse:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dead_letter_queue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeadLetterQueueUrl' }})
    default_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultEncryptionKey' }})
    default_expiration_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultExpirationDays' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    last_updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    matching: Optional[matchingresponse.MatchingResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Matching' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
