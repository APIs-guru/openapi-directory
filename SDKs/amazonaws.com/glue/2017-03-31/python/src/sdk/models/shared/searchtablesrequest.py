from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchTablesRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    filters: Optional[List[PropertyPredicate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_share_type: Optional[ResourceShareTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceShareType') }})
    search_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchText') }})
    sort_criteria: Optional[List[SortCriterion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortCriteria') }})
    
