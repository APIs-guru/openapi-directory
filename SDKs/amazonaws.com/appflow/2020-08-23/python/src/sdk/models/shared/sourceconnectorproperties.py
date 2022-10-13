from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amplitudesourceproperties
from . import datadogsourceproperties
from . import dynatracesourceproperties
from . import googleanalyticssourceproperties
from . import infornexussourceproperties
from . import marketosourceproperties
from . import s3sourceproperties
from . import sapodatasourceproperties
from . import salesforcesourceproperties
from . import servicenowsourceproperties
from . import singularsourceproperties
from . import slacksourceproperties
from . import trendmicrosourceproperties
from . import veevasourceproperties
from . import zendesksourceproperties


@dataclass_json
@dataclass
class SourceConnectorProperties:
    amplitude: Optional[amplitudesourceproperties.AmplitudeSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amplitude' }})
    datadog: Optional[datadogsourceproperties.DatadogSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Datadog' }})
    dynatrace: Optional[dynatracesourceproperties.DynatraceSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dynatrace' }})
    google_analytics: Optional[googleanalyticssourceproperties.GoogleAnalyticsSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GoogleAnalytics' }})
    infor_nexus: Optional[infornexussourceproperties.InforNexusSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InforNexus' }})
    marketo: Optional[marketosourceproperties.MarketoSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marketo' }})
    s3: Optional[s3sourceproperties.S3SourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3' }})
    sapo_data: Optional[sapodatasourceproperties.SapoDataSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SAPOData' }})
    salesforce: Optional[salesforcesourceproperties.SalesforceSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salesforce' }})
    service_now: Optional[servicenowsourceproperties.ServiceNowSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNow' }})
    singular: Optional[singularsourceproperties.SingularSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Singular' }})
    slack: Optional[slacksourceproperties.SlackSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Slack' }})
    trendmicro: Optional[trendmicrosourceproperties.TrendmicroSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trendmicro' }})
    veeva: Optional[veevasourceproperties.VeevaSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Veeva' }})
    zendesk: Optional[zendesksourceproperties.ZendeskSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zendesk' }})
    
