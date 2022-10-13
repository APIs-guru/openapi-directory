from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import crawlstate_enum
from . import logicaloperator_enum
from . import jobrunstate_enum


@dataclass_json
@dataclass
class Condition:
    crawl_state: Optional[crawlstate_enum.CrawlStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlState' }})
    crawler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlerName' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    logical_operator: Optional[logicaloperator_enum.LogicalOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogicalOperator' }})
    state: Optional[jobrunstate_enum.JobRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
