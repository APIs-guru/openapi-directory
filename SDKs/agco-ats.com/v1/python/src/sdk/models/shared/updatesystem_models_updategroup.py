from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateGroup:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }, 'form': { 'field_name': 'ID' }})
    inventory_frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InventoryFrequency' }, 'form': { 'field_name': 'InventoryFrequency' }})
    inventory_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InventoryPackage' }, 'form': { 'field_name': 'InventoryPackage' }})
    localized_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalizedDescription' }, 'form': { 'field_name': 'LocalizedDescription' }})
    localized_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalizedName' }, 'form': { 'field_name': 'LocalizedName' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }, 'form': { 'field_name': 'Priority' }})
    report_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportField' }, 'form': { 'field_name': 'ReportField' }})
    update_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateType' }, 'form': { 'field_name': 'UpdateType' }})
    validating_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidatingField' }, 'form': { 'field_name': 'ValidatingField' }})
    value_to_validate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueToValidate' }, 'form': { 'field_name': 'ValueToValidate' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }, 'form': { 'field_name': 'Version' }})
    
