from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import marketoconnectoroperator_enum
from . import s3connectoroperator_enum
from . import salesforceconnectoroperator_enum
from . import servicenowconnectoroperator_enum
from . import zendeskconnectoroperator_enum


@dataclass_json
@dataclass
class ConnectorOperator:
    marketo: Optional[marketoconnectoroperator_enum.MarketoConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marketo' }})
    s3: Optional[s3connectoroperator_enum.S3ConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3' }})
    salesforce: Optional[salesforceconnectoroperator_enum.SalesforceConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salesforce' }})
    service_now: Optional[servicenowconnectoroperator_enum.ServiceNowConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNow' }})
    zendesk: Optional[zendeskconnectoroperator_enum.ZendeskConnectorOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zendesk' }})
    
