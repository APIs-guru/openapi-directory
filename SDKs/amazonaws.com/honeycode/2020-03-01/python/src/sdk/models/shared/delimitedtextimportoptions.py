from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DelimitedTextImportOptions:
    r"""DelimitedTextImportOptions
     An object that contains the options relating to parsing delimited text as part of an import request. 
    """
    
    delimiter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimiter') }})
    data_character_encoding: Optional[ImportDataCharacterEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCharacterEncoding') }})
    has_header_row: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasHeaderRow') }})
    ignore_empty_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreEmptyRows') }})
    
