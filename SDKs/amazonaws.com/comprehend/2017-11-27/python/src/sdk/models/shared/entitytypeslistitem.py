from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EntityTypesListItem:
    r"""EntityTypesListItem
    An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
    """
    
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
