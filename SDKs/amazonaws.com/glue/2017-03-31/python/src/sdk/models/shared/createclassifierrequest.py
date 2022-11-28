from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateClassifierRequest:
    csv_classifier: Optional[CreateCsvClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvClassifier') }})
    grok_classifier: Optional[CreateGrokClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrokClassifier') }})
    json_classifier: Optional[CreateJSONClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonClassifier') }})
    xml_classifier: Optional[CreateXMLClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XMLClassifier') }})
    
