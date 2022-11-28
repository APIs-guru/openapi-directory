from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Condition:
    r"""Condition
    Defines a condition under which a trigger fires.
    """
    
    crawl_state: Optional[CrawlStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlState') }})
    crawler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerName') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    logical_operator: Optional[LogicalOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogicalOperator') }})
    state: Optional[JobRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
