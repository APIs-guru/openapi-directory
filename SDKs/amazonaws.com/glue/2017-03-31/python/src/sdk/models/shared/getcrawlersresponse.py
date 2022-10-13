from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import crawler


@dataclass_json
@dataclass
class GetCrawlersResponse:
    crawlers: Optional[List[crawler.Crawler]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Crawlers' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
