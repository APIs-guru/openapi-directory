from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Variable:
    r"""Variable
    An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    dataset_content_version_value: Optional[DatasetContentVersionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetContentVersionValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    output_file_uri_value: Optional[OutputFileURIValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFileUriValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
