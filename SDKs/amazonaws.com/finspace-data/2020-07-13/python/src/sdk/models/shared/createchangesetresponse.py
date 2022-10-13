from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import changesetinfo


@dataclass_json
@dataclass
class CreateChangesetResponse:
    changeset: Optional[changesetinfo.ChangesetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeset' }})
    
