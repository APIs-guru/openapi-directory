from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import fieldtypedetails


@dataclass_json
@dataclass
class SupportedFieldTypeDetails:
    v1: fieldtypedetails.FieldTypeDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1' }})
    
