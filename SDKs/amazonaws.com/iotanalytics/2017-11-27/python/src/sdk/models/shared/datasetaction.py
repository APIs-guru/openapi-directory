from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetAction:
    r"""DatasetAction
    A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.
    """
    
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    container_action: Optional[ContainerDatasetAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerAction') }})
    query_action: Optional[SQLQueryDatasetAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryAction') }})
    
