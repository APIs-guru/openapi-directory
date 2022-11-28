from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateXMLClassifierRequest:
    r"""CreateXMLClassifierRequest
    Specifies an XML classifier for <code>CreateClassifier</code> to create.
    """
    
    classification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    row_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowTag') }})
    
