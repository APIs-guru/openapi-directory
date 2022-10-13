from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import uicustomizationtype


@dataclass_json
@dataclass
class GetUICustomizationResponse:
    ui_customization: uicustomizationtype.UICustomizationType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UICustomization' }})
    
