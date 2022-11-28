from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateCsvClassifierRequest:
    r"""UpdateCsvClassifierRequest
    Specifies a custom CSV classifier to be updated.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    allow_single_column: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowSingleColumn') }})
    contains_header: Optional[CsvHeaderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainsHeader') }})
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delimiter') }})
    disable_value_trimming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableValueTrimming') }})
    header: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Header') }})
    quote_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteSymbol') }})
    
