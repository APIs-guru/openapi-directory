from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContentSubmissionSharedBusinessEntitiesContentSubmissionType:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    attribute_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeTemplate') }, 'form': { 'field_name': 'AttributeTemplate' }})
    category_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CategoryTemplate') }, 'form': { 'field_name': 'CategoryTemplate' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }, 'form': { 'field_name': 'Enabled' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }, 'form': { 'field_name': 'ID' }})
    inventory_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InventoryPackageID') }, 'form': { 'field_name': 'InventoryPackageID' }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobID') }, 'form': { 'field_name': 'JobID' }})
    release_notes_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReleaseNotesDescription') }, 'form': { 'field_name': 'ReleaseNotesDescription' }})
    
