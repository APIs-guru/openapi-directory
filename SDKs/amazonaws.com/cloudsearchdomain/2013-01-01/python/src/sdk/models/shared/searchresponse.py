from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResponse:
    r"""SearchResponse
    The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
    """
    
    facets: Optional[dict[str, BucketInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    hits: Optional[Hits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hits') }})
    stats: Optional[dict[str, FieldStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    status: Optional[SearchStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
