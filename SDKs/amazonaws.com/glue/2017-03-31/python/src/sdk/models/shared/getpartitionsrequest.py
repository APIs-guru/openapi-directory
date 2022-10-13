from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import segment


@dataclass_json
@dataclass
class GetPartitionsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    exclude_column_schema: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeColumnSchema' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    segment: Optional[segment.Segment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segment' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
