from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsPackageType:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attribute' }, 'form': { 'field_name': 'Attribute' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }, 'form': { 'field_name': 'Category' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Icon' }, 'form': { 'field_name': 'Icon' }})
    inventory_frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InventoryFrequency' }, 'form': { 'field_name': 'InventoryFrequency' }})
    inventory_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InventoryPackage' }, 'form': { 'field_name': 'InventoryPackage' }})
    localized_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalizedDescription' }, 'form': { 'field_name': 'LocalizedDescription' }})
    localized_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalizedName' }, 'form': { 'field_name': 'LocalizedName' }})
    max_delta_packages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxDeltaPackages' }, 'form': { 'field_name': 'MaxDeltaPackages' }})
    package_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageTypeID' }, 'form': { 'field_name': 'PackageTypeID' }})
    
