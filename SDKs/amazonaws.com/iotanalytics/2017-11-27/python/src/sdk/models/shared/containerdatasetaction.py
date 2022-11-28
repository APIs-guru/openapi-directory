from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerDatasetAction:
    r"""ContainerDatasetAction
    Information required to run the <code>containerAction</code> to produce dataset contents.
    """
    
    execution_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    resource_configuration: ResourceConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceConfiguration') }})
    variables: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
