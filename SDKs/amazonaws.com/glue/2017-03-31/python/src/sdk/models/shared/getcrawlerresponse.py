from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import crawler


@dataclass_json
@dataclass
class GetCrawlerResponse:
    crawler: Optional[crawler.Crawler] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Crawler' }})
    
