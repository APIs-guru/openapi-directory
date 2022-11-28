from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationConnectorProperties:
    r"""DestinationConnectorProperties
     This stores the information that is required to query a particular connector. 
    """
    
    customer_profiles: Optional[CustomerProfilesDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerProfiles') }})
    event_bridge: Optional[EventBridgeDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBridge') }})
    honeycode: Optional[HoneycodeDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Honeycode') }})
    lookout_metrics: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LookoutMetrics') }})
    redshift: Optional[RedshiftDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redshift') }})
    s3: Optional[S3DestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    salesforce: Optional[SalesforceDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    snowflake: Optional[SnowflakeDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snowflake') }})
    upsolver: Optional[UpsolverDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Upsolver') }})
    zendesk: Optional[ZendeskDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
