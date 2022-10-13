from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fileheaderinfo_enum


@dataclass_json
@dataclass
class CsvInput:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comments' }})
    field_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldDelimiter' }})
    file_header_info: Optional[fileheaderinfo_enum.FileHeaderInfoEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileHeaderInfo' }})
    quote_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuoteCharacter' }})
    quote_escape_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuoteEscapeCharacter' }})
    record_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordDelimiter' }})
    
