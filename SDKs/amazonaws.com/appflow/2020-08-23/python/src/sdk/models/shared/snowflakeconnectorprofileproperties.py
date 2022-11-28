from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnowflakeConnectorProfileProperties:
    r"""SnowflakeConnectorProfileProperties
     The connector-specific profile properties required when using Snowflake. 
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    stage: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    warehouse: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    private_link_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateLinkServiceName') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
