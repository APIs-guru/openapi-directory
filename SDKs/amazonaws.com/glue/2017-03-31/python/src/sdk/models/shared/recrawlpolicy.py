from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecrawlPolicy:
    r"""RecrawlPolicy
    When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href=\"https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html\">Incremental Crawls in Glue</a> in the developer guide.
    """
    
    recrawl_behavior: Optional[RecrawlBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecrawlBehavior') }})
    
