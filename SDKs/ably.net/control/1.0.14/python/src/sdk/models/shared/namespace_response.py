from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NamespaceResponse:
    authenticated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticated') }})
    created: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    persist_last: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistLast') }})
    persisted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persisted') }})
    push_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushEnabled') }})
    tls_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsOnly') }})
    
