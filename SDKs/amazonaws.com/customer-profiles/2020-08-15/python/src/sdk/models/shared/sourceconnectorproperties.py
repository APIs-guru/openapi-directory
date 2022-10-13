from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import marketosourceproperties
from . import s3sourceproperties
from . import salesforcesourceproperties
from . import servicenowsourceproperties
from . import zendesksourceproperties


@dataclass_json
@dataclass
class SourceConnectorProperties:
    marketo: Optional[marketosourceproperties.MarketoSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marketo' }})
    s3: Optional[s3sourceproperties.S3SourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3' }})
    salesforce: Optional[salesforcesourceproperties.SalesforceSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salesforce' }})
    service_now: Optional[servicenowsourceproperties.ServiceNowSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNow' }})
    zendesk: Optional[zendesksourceproperties.ZendeskSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zendesk' }})
    
