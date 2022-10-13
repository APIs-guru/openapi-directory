from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import indexattachment


@dataclass_json
@dataclass
class ListAttachedIndicesResponse:
    index_attachments: Optional[List[indexattachment.IndexAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexAttachments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
