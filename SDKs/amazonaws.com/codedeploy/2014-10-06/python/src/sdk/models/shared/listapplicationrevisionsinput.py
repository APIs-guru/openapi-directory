from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import liststatefilteraction_enum
from . import applicationrevisionsortby_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class ListApplicationRevisionsInput:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    deployed: Optional[liststatefilteraction_enum.ListStateFilterActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployed' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3KeyPrefix' }})
    sort_by: Optional[applicationrevisionsortby_enum.ApplicationRevisionSortByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
