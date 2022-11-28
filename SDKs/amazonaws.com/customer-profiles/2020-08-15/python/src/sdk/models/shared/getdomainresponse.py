from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDomainResponse:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    last_updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dead_letter_queue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterQueueUrl') }})
    default_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultEncryptionKey') }})
    default_expiration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultExpirationDays') }})
    matching: Optional[MatchingResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Matching') }})
    stats: Optional[DomainStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stats') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
