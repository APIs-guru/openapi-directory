from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import csvheaderoption_enum


@dataclass_json
@dataclass
class CsvClassifier:
    allow_single_column: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowSingleColumn' }})
    contains_header: Optional[csvheaderoption_enum.CsvHeaderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainsHeader' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Delimiter' }})
    disable_value_trimming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableValueTrimming' }})
    header: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Header' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    quote_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuoteSymbol' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
