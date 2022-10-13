from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import customerprofilesdestinationproperties
from . import eventbridgedestinationproperties
from . import honeycodedestinationproperties
from . import redshiftdestinationproperties
from . import s3destinationproperties
from . import salesforcedestinationproperties
from . import snowflakedestinationproperties
from . import upsolverdestinationproperties
from . import zendeskdestinationproperties


@dataclass_json
@dataclass
class DestinationConnectorProperties:
    customer_profiles: Optional[customerprofilesdestinationproperties.CustomerProfilesDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerProfiles' }})
    event_bridge: Optional[eventbridgedestinationproperties.EventBridgeDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBridge' }})
    honeycode: Optional[honeycodedestinationproperties.HoneycodeDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Honeycode' }})
    lookout_metrics: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookoutMetrics' }})
    redshift: Optional[redshiftdestinationproperties.RedshiftDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Redshift' }})
    s3: Optional[s3destinationproperties.S3DestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3' }})
    salesforce: Optional[salesforcedestinationproperties.SalesforceDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salesforce' }})
    snowflake: Optional[snowflakedestinationproperties.SnowflakeDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Snowflake' }})
    upsolver: Optional[upsolverdestinationproperties.UpsolverDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Upsolver' }})
    zendesk: Optional[zendeskdestinationproperties.ZendeskDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zendesk' }})
    
