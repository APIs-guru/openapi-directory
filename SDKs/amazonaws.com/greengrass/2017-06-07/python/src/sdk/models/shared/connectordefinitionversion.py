from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorDefinitionVersion:
    r"""ConnectorDefinitionVersion
    Information about the connector definition version, which is a container for connectors.
    """
    
    connectors: Optional[List[Connector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connectors') }})
    
