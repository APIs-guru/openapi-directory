from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsmetadata
from . import honeycodemetadata
from . import salesforcemetadata
from . import slackmetadata
from . import snowflakemetadata
from . import zendeskmetadata


@dataclass_json
@dataclass
class ConnectorMetadata:
    amplitude: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amplitude' }})
    customer_profiles: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerProfiles' }})
    datadog: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Datadog' }})
    dynatrace: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dynatrace' }})
    event_bridge: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBridge' }})
    google_analytics: Optional[googleanalyticsmetadata.GoogleAnalyticsMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GoogleAnalytics' }})
    honeycode: Optional[honeycodemetadata.HoneycodeMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Honeycode' }})
    infor_nexus: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InforNexus' }})
    marketo: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marketo' }})
    redshift: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Redshift' }})
    s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3' }})
    sapo_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SAPOData' }})
    salesforce: Optional[salesforcemetadata.SalesforceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salesforce' }})
    service_now: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNow' }})
    singular: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Singular' }})
    slack: Optional[slackmetadata.SlackMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Slack' }})
    snowflake: Optional[snowflakemetadata.SnowflakeMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Snowflake' }})
    trendmicro: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trendmicro' }})
    upsolver: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Upsolver' }})
    veeva: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Veeva' }})
    zendesk: Optional[zendeskmetadata.ZendeskMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zendesk' }})
    
