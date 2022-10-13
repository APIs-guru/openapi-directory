from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import propertypredicate
from . import resourcesharetype_enum
from . import sortcriterion


@dataclass_json
@dataclass
class SearchTablesRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    filters: Optional[List[propertypredicate.PropertyPredicate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_share_type: Optional[resourcesharetype_enum.ResourceShareTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceShareType' }})
    search_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchText' }})
    sort_criteria: Optional[List[sortcriterion.SortCriterion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortCriteria' }})
    
