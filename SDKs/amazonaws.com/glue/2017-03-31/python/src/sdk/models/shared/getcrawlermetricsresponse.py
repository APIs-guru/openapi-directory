from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import crawlermetrics


@dataclass_json
@dataclass
class GetCrawlerMetricsResponse:
    crawler_metrics_list: Optional[List[crawlermetrics.CrawlerMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlerMetricsList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
