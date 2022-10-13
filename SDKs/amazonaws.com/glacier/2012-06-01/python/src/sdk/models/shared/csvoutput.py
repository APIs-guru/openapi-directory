from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import quotefields_enum


@dataclass_json
@dataclass
class CsvOutput:
    field_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldDelimiter' }})
    quote_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuoteCharacter' }})
    quote_escape_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuoteEscapeCharacter' }})
    quote_fields: Optional[quotefields_enum.QuoteFieldsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuoteFields' }})
    record_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordDelimiter' }})
    
