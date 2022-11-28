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
    
    marketo: Optional[MarketoConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    s3: Optional[S3ConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    salesforce: Optional[SalesforceConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[ServiceNowConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    zendesk: Optional[ZendeskConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
