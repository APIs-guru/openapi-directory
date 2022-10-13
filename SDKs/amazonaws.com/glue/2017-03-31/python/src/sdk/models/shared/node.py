from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import crawlernodedetails
from . import jobnodedetails
from . import triggernodedetails
from . import nodetype_enum


@dataclass_json
@dataclass
class Node:
    crawler_details: Optional[crawlernodedetails.CrawlerNodeDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlerDetails' }})
    job_details: Optional[jobnodedetails.JobNodeDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    trigger_details: Optional[triggernodedetails.TriggerNodeDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TriggerDetails' }})
    type: Optional[nodetype_enum.NodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UniqueId' }})
    
