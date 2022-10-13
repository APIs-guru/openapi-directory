from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configurationitemtype_enum
from . import filter
from . import orderbyelement


@dataclass_json
@dataclass
class ListConfigurationsRequest:
    configuration_type: configurationitemtype_enum.ConfigurationItemTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationType' }})
    filters: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    order_by: Optional[List[orderbyelement.OrderByElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    
