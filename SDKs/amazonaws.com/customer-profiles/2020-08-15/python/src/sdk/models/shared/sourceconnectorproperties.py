from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceConnectorProperties:
    r"""SourceConnectorProperties
    Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
    """
    
    marketo: Optional[MarketoSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    s3: Optional[S3SourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    salesforce: Optional[SalesforceSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[ServiceNowSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    zendesk: Optional[ZendeskSourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
