from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ldapstype_enum


@dataclass_json
@dataclass
class DescribeLdapsSettingsRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    type: Optional[ldapstype_enum.LdapsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
