from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import datadogconnectorprofileproperties
from . import dynatraceconnectorprofileproperties
from . import infornexusconnectorprofileproperties
from . import marketoconnectorprofileproperties
from . import redshiftconnectorprofileproperties
from . import sapodataconnectorprofileproperties
from . import salesforceconnectorprofileproperties
from . import servicenowconnectorprofileproperties
from . import slackconnectorprofileproperties
from . import snowflakeconnectorprofileproperties
from . import veevaconnectorprofileproperties
from . import zendeskconnectorprofileproperties


@dataclass_json
@dataclass
class ConnectorProfileProperties:
    amplitude: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amplitude' }})
    datadog: Optional[datadogconnectorprofileproperties.DatadogConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Datadog' }})
    dynatrace: Optional[dynatraceconnectorprofileproperties.DynatraceConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dynatrace' }})
    google_analytics: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GoogleAnalytics' }})
    honeycode: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Honeycode' }})
    infor_nexus: Optional[infornexusconnectorprofileproperties.InforNexusConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InforNexus' }})
    marketo: Optional[marketoconnectorprofileproperties.MarketoConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marketo' }})
    redshift: Optional[redshiftconnectorprofileproperties.RedshiftConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Redshift' }})
    sapo_data: Optional[sapodataconnectorprofileproperties.SapoDataConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SAPOData' }})
    salesforce: Optional[salesforceconnectorprofileproperties.SalesforceConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salesforce' }})
    service_now: Optional[servicenowconnectorprofileproperties.ServiceNowConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNow' }})
    singular: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Singular' }})
    slack: Optional[slackconnectorprofileproperties.SlackConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Slack' }})
    snowflake: Optional[snowflakeconnectorprofileproperties.SnowflakeConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Snowflake' }})
    trendmicro: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trendmicro' }})
    veeva: Optional[veevaconnectorprofileproperties.VeevaConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Veeva' }})
    zendesk: Optional[zendeskconnectorprofileproperties.ZendeskConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zendesk' }})
    
