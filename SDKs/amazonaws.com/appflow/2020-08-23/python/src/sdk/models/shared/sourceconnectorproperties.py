from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceConnectorProperties:
    r"""SourceConnectorProperties
     Specifies the information that is required to query a particular connector. 
    """
    
    amplitude: Optional[AmplitudeSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    datadog: Optional[DatadogSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[DynatraceSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    google_analytics: Optional[GoogleAnalyticsSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    infor_nexus: Optional[InforNexusSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[MarketoSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    s3: Optional[S3SourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    sapo_data: Optional[SapoDataSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[SalesforceSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[ServiceNowSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[SingularSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[SlackSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    trendmicro: Optional[TrendmicroSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    veeva: Optional[VeevaSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[ZendeskSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
