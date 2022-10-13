from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import csvheaderoption_enum


@dataclass_json
@dataclass
class UpdateCsvClassifierRequest:
    allow_single_column: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowSingleColumn' }})
    contains_header: Optional[csvheaderoption_enum.CsvHeaderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainsHeader' }})
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Delimiter' }})
    disable_value_trimming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableValueTrimming' }})
    header: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Header' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    quote_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuoteSymbol' }})
    
