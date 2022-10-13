from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destinationfieldproperties
from . import sourcefieldproperties
from . import supportedfieldtypedetails


@dataclass_json
@dataclass
class ConnectorEntityField:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_properties: Optional[destinationfieldproperties.DestinationFieldProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationProperties' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    source_properties: Optional[sourcefieldproperties.SourceFieldProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceProperties' }})
    supported_field_type_details: Optional[supportedfieldtypedetails.SupportedFieldTypeDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedFieldTypeDetails' }})
    
