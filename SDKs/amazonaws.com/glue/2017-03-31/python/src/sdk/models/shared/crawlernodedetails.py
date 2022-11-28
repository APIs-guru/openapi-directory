from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CrawlerNodeDetails:
    r"""CrawlerNodeDetails
    The details of a Crawler node present in the workflow.
    """
    
    crawls: Optional[List[Crawl]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Crawls') }})
    
