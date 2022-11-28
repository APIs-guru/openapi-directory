from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorEntityField:
    r"""ConnectorEntityField
     Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. 
    """
    
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_properties: Optional[DestinationFieldProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationProperties') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    source_properties: Optional[SourceFieldProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    supported_field_type_details: Optional[SupportedFieldTypeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedFieldTypeDetails') }})
    
