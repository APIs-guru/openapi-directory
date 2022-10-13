from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentSubmissionSharedBusinessEntitiesUserContentDefinition:
    content_definition_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentDefinitionID' }, 'form': { 'field_name': 'ContentDefinitionID' }})
    user_content_definition_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserContentDefinitionID' }, 'form': { 'field_name': 'UserContentDefinitionID' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserID' }, 'form': { 'field_name': 'UserID' }})
    
