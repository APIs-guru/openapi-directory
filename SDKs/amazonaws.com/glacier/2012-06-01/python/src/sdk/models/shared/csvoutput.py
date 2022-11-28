from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CsvOutput:
    r"""CsvOutput
    Contains information about the comma-separated value (CSV) file that the job results are stored in.
    """
    
    field_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldDelimiter') }})
    quote_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteCharacter') }})
    quote_escape_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteEscapeCharacter') }})
    quote_fields: Optional[QuoteFieldsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteFields') }})
    record_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordDelimiter') }})
    
