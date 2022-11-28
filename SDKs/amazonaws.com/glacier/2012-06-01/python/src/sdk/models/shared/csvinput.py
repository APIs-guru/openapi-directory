from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CsvInput:
    r"""CsvInput
    Contains information about the comma-separated value (CSV) file to select from.
    """
    
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comments') }})
    field_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldDelimiter') }})
    file_header_info: Optional[FileHeaderInfoEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileHeaderInfo') }})
    quote_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteCharacter') }})
    quote_escape_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteEscapeCharacter') }})
    record_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordDelimiter') }})
    
