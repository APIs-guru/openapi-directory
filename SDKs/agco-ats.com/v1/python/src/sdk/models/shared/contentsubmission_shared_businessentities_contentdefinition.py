from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContentSubmissionSharedBusinessEntitiesContentDefinition:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    attributes: Optional[List[ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    content_definition_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentDefinitionID') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    package_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageTypeID') }})
    type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeID') }})
    
