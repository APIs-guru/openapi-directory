from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorProfileProperties:
    r"""ConnectorProfileProperties
     The connector-specific profile properties required by each connector. 
    """
    
    amplitude: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    datadog: Optional[DatadogConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[DynatraceConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    google_analytics: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    honeycode: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Honeycode') }})
    infor_nexus: Optional[InforNexusConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[MarketoConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    redshift: Optional[RedshiftConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redshift') }})
    sapo_data: Optional[SapoDataConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[SalesforceConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[ServiceNowConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[SlackConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    snowflake: Optional[SnowflakeConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snowflake') }})
    trendmicro: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    veeva: Optional[VeevaConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[ZendeskConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
