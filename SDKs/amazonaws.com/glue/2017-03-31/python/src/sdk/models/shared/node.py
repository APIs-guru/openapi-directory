from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Node:
    r"""Node
    A node represents an Glue component (trigger, crawler, or job) on a workflow graph.
    """
    
    crawler_details: Optional[CrawlerNodeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerDetails') }})
    job_details: Optional[JobNodeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    trigger_details: Optional[TriggerNodeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TriggerDetails') }})
    type: Optional[NodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueId') }})
    
