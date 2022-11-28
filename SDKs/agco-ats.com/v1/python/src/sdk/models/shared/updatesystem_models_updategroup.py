from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateGroup:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }, 'form': { 'field_name': 'Priority' }})
    update_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateType') }, 'form': { 'field_name': 'UpdateType' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }, 'form': { 'field_name': 'ID' }})
    inventory_frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InventoryFrequency') }, 'form': { 'field_name': 'InventoryFrequency' }})
    inventory_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InventoryPackage') }, 'form': { 'field_name': 'InventoryPackage' }})
    localized_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalizedDescription') }, 'form': { 'field_name': 'LocalizedDescription' }})
    localized_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalizedName') }, 'form': { 'field_name': 'LocalizedName' }})
    report_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportField') }, 'form': { 'field_name': 'ReportField' }})
    validating_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidatingField') }, 'form': { 'field_name': 'ValidatingField' }})
    value_to_validate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueToValidate') }, 'form': { 'field_name': 'ValueToValidate' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }, 'form': { 'field_name': 'Version' }})
    
