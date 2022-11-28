from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorOperator:
    r"""ConnectorOperator
     The operation to be performed on the provided source fields. 
    """
    
    amplitude: Optional[AmplitudeConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    datadog: Optional[DatadogConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[DynatraceConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    google_analytics: Optional[GoogleAnalyticsConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    infor_nexus: Optional[InforNexusConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[MarketoConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    s3: Optional[S3ConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    sapo_data: Optional[SapoDataConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[SalesforceConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[ServiceNowConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[SingularConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[SlackConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    trendmicro: Optional[TrendmicroConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    veeva: Optional[VeevaConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[ZendeskConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
