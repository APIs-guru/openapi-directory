from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datacatalogsummary


@dataclass_json
@dataclass
class ListDataCatalogsOutput:
    data_catalogs_summary: Optional[List[datacatalogsummary.DataCatalogSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCatalogsSummary' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
