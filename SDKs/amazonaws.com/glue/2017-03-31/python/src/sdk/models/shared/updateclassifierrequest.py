from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateClassifierRequest:
    csv_classifier: Optional[UpdateCsvClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvClassifier') }})
    grok_classifier: Optional[UpdateGrokClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrokClassifier') }})
    json_classifier: Optional[UpdateJSONClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonClassifier') }})
    xml_classifier: Optional[UpdateXMLClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XMLClassifier') }})
    
