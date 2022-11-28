from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StorageConnector:
    r"""StorageConnector
    Describes a connector that enables persistent storage for users.
    """
    
    connector_type: StorageConnectorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectorType') }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domains') }})
    resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    
