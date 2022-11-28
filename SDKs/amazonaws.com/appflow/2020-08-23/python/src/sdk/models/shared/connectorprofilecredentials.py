from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorProfileCredentials:
    r"""ConnectorProfileCredentials
     The connector-specific credentials required by a connector. 
    """
    
    amplitude: Optional[AmplitudeConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    datadog: Optional[DatadogConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[DynatraceConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    google_analytics: Optional[GoogleAnalyticsConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    honeycode: Optional[HoneycodeConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Honeycode') }})
    infor_nexus: Optional[InforNexusConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[MarketoConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    redshift: Optional[RedshiftConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redshift') }})
    sapo_data: Optional[SapoDataConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[SalesforceConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[ServiceNowConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[SingularConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[SlackConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    snowflake: Optional[SnowflakeConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snowflake') }})
    trendmicro: Optional[TrendmicroConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    veeva: Optional[VeevaConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[ZendeskConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
