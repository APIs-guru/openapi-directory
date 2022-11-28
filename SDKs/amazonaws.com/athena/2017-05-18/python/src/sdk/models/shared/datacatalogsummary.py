from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataCatalogSummary:
    r"""DataCatalogSummary
    The summary information for the data catalog, which includes its name and type.
    """
    
    catalog_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogName') }})
    type: Optional[DataCatalogTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
