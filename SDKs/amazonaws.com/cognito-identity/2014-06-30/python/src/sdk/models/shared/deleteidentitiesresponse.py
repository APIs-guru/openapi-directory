from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import unprocessedidentityid


@dataclass_json
@dataclass
class DeleteIdentitiesResponse:
    unprocessed_identity_ids: Optional[List[unprocessedidentityid.UnprocessedIdentityID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedIdentityIds' }})
    
