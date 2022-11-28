from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorMetadata:
    r"""ConnectorMetadata
     A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. 
    """
    
    amplitude: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    customer_profiles: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerProfiles') }})
    datadog: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    event_bridge: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBridge') }})
    google_analytics: Optional[GoogleAnalyticsMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    honeycode: Optional[HoneycodeMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Honeycode') }})
    infor_nexus: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    redshift: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redshift') }})
    s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    sapo_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[SalesforceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[SlackMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    snowflake: Optional[SnowflakeMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snowflake') }})
    trendmicro: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    upsolver: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Upsolver') }})
    veeva: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[ZendeskMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
