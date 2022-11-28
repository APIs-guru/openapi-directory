from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceDiscoverSchemaRead:
    r"""SourceDiscoverSchemaRead
    Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.
    """
    
    job_info: SynchronousJobRead = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInfo') }})
    catalog: Optional[AirbyteCatalog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalog') }})
    
