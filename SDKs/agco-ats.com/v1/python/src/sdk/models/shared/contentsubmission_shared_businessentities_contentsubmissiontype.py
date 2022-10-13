from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentSubmissionSharedBusinessEntitiesContentSubmissionType:
    attribute_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeTemplate' }, 'form': { 'field_name': 'AttributeTemplate' }})
    category_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CategoryTemplate' }, 'form': { 'field_name': 'CategoryTemplate' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }, 'form': { 'field_name': 'Enabled' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }, 'form': { 'field_name': 'ID' }})
    inventory_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InventoryPackageID' }, 'form': { 'field_name': 'InventoryPackageID' }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobID' }, 'form': { 'field_name': 'JobID' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    release_notes_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseNotesDescription' }, 'form': { 'field_name': 'ReleaseNotesDescription' }})
    
