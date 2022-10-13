from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bucketinfo
from . import hits
from . import fieldstats
from . import searchstatus


@dataclass_json
@dataclass
class SearchResponse:
    facets: Optional[dict[str, bucketinfo.BucketInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facets' }})
    hits: Optional[hits.Hits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hits' }})
    stats: Optional[dict[str, fieldstats.FieldStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    status: Optional[searchstatus.SearchStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
