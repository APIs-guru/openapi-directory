from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectorEntity:
    r"""ConnectorEntity
     The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>. 
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    has_nested_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasNestedEntities') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
