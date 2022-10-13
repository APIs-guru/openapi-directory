from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amplitudeconnectorprofilecredentials
from . import datadogconnectorprofilecredentials
from . import dynatraceconnectorprofilecredentials
from . import googleanalyticsconnectorprofilecredentials
from . import honeycodeconnectorprofilecredentials
from . import infornexusconnectorprofilecredentials
from . import marketoconnectorprofilecredentials
from . import redshiftconnectorprofilecredentials
from . import sapodataconnectorprofilecredentials
from . import salesforceconnectorprofilecredentials
from . import servicenowconnectorprofilecredentials
from . import singularconnectorprofilecredentials
from . import slackconnectorprofilecredentials
from . import snowflakeconnectorprofilecredentials
from . import trendmicroconnectorprofilecredentials
from . import veevaconnectorprofilecredentials
from . import zendeskconnectorprofilecredentials


@dataclass_json
@dataclass
class ConnectorProfileCredentials:
    amplitude: Optional[amplitudeconnectorprofilecredentials.AmplitudeConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amplitude' }})
    datadog: Optional[datadogconnectorprofilecredentials.DatadogConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Datadog' }})
    dynatrace: Optional[dynatraceconnectorprofilecredentials.DynatraceConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dynatrace' }})
    google_analytics: Optional[googleanalyticsconnectorprofilecredentials.GoogleAnalyticsConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GoogleAnalytics' }})
    honeycode: Optional[honeycodeconnectorprofilecredentials.HoneycodeConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Honeycode' }})
    infor_nexus: Optional[infornexusconnectorprofilecredentials.InforNexusConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InforNexus' }})
    marketo: Optional[marketoconnectorprofilecredentials.MarketoConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marketo' }})
    redshift: Optional[redshiftconnectorprofilecredentials.RedshiftConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Redshift' }})
    sapo_data: Optional[sapodataconnectorprofilecredentials.SapoDataConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SAPOData' }})
    salesforce: Optional[salesforceconnectorprofilecredentials.SalesforceConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salesforce' }})
    service_now: Optional[servicenowconnectorprofilecredentials.ServiceNowConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNow' }})
    singular: Optional[singularconnectorprofilecredentials.SingularConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Singular' }})
    slack: Optional[slackconnectorprofilecredentials.SlackConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Slack' }})
    snowflake: Optional[snowflakeconnectorprofilecredentials.SnowflakeConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Snowflake' }})
    trendmicro: Optional[trendmicroconnectorprofilecredentials.TrendmicroConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trendmicro' }})
    veeva: Optional[veevaconnectorprofilecredentials.VeevaConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Veeva' }})
    zendesk: Optional[zendeskconnectorprofilecredentials.ZendeskConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zendesk' }})
    
