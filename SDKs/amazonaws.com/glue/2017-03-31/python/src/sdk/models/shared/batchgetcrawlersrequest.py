from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchGetCrawlersRequest:
    crawler_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlerNames' }})
    
