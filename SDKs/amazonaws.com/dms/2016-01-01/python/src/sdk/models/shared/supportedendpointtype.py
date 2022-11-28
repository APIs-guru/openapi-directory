from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SupportedEndpointType:
    r"""SupportedEndpointType
    Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.
    """
    
    endpoint_type: Optional[ReplicationEndpointTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    engine_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineDisplayName') }})
    engine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineName') }})
    replication_instance_engine_minimum_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceEngineMinimumVersion') }})
    supports_cdc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportsCDC') }})
    
