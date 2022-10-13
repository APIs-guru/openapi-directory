from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publickey


@dataclass_json
@dataclass
class ListPublicKeysResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    public_key_list: Optional[List[publickey.PublicKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKeyList' }})
    
