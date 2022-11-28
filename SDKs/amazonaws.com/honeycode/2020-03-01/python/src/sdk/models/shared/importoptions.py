from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportOptions:
    r"""ImportOptions
    An object that contains the options specified by the sumitter of the import request.
    """
    
    delimited_text_options: Optional[DelimitedTextImportOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimitedTextOptions') }})
    destination_options: Optional[DestinationOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationOptions') }})
    
