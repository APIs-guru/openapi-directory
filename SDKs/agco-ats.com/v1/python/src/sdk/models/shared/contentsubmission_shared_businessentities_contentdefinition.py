from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contentsubmission_shared_businessentities_contentdefinitionattribute


@dataclass_json
@dataclass
class ContentSubmissionSharedBusinessEntitiesContentDefinition:
    attributes: Optional[List[contentsubmission_shared_businessentities_contentdefinitionattribute.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    content_definition_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentDefinitionID' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    package_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageTypeID' }})
    type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeID' }})
    
