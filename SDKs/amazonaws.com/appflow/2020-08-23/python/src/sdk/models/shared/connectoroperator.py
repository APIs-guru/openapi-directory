from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import amplitudeconnectoroperator_enum
from . import datadogconnectoroperator_enum
from . import dynatraceconnectoroperator_enum
from . import googleanalyticsconnectoroperator_enum
from . import infornexusconnectoroperator_enum
from . import marketoconnectoroperator_enum
from . import s3connectoroperator_enum
from . import sapodataconnectoroperator_enum
from . import salesforceconnectoroperator_enum
from . import servicenowconnectoroperator_enum
from . import singularconnectoroperator_enum
from . import slackconnectoroperator_enum
from . import trendmicroconnectoroperator_enum
from . import veevaconnectoroperator_enum
from . import zendeskconnectoroperator_enum


@dataclass_json
@dataclass
class ConnectorOperator:
    amplitude: Optional[amplitudeconnectoroperator_enum.AmplitudeConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amplitude' }})
    datadog: Optional[datadogconnectoroperator_enum.DatadogConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Datadog' }})
    dynatrace: Optional[dynatraceconnectoroperator_enum.DynatraceConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dynatrace' }})
    google_analytics: Optional[googleanalyticsconnectoroperator_enum.GoogleAnalyticsConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GoogleAnalytics' }})
    infor_nexus: Optional[infornexusconnectoroperator_enum.InforNexusConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InforNexus' }})
    marketo: Optional[marketoconnectoroperator_enum.MarketoConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marketo' }})
    s3: Optional[s3connectoroperator_enum.S3ConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3' }})
    sapo_data: Optional[sapodataconnectoroperator_enum.SapoDataConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SAPOData' }})
    salesforce: Optional[salesforceconnectoroperator_enum.SalesforceConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salesforce' }})
    service_now: Optional[servicenowconnectoroperator_enum.ServiceNowConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNow' }})
    singular: Optional[singularconnectoroperator_enum.SingularConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Singular' }})
    slack: Optional[slackconnectoroperator_enum.SlackConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Slack' }})
    trendmicro: Optional[trendmicroconnectoroperator_enum.TrendmicroConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trendmicro' }})
    veeva: Optional[veevaconnectoroperator_enum.VeevaConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Veeva' }})
    zendesk: Optional[zendeskconnectoroperator_enum.ZendeskConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zendesk' }})
    
