from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LineageConfiguration:
    r"""LineageConfiguration
    Specifies data lineage configuration settings for the crawler.
    """
    
    crawler_lineage_settings: Optional[CrawlerLineageSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerLineageSettings') }})
    
