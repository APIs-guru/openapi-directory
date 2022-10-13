from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import crawler


@dataclass_json
@dataclass
class BatchGetCrawlersResponse:
    crawlers: Optional[List[crawler.Crawler]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Crawlers' }})
    crawlers_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlersNotFound' }})
    
