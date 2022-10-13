from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import crawl


@dataclass_json
@dataclass
class CrawlerNodeDetails:
    crawls: Optional[List[crawl.Crawl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Crawls' }})
    
