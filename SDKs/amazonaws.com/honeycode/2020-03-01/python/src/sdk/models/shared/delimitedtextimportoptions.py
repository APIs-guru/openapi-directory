from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import importdatacharacterencoding_enum


@dataclass_json
@dataclass
class DelimitedTextImportOptions:
    data_character_encoding: Optional[importdatacharacterencoding_enum.ImportDataCharacterEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCharacterEncoding' }})
    delimiter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delimiter' }})
    has_header_row: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasHeaderRow' }})
    ignore_empty_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreEmptyRows' }})
    
