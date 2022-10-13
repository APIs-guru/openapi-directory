from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createcsvclassifierrequest
from . import creategrokclassifierrequest
from . import createjsonclassifierrequest
from . import createxmlclassifierrequest


@dataclass_json
@dataclass
class CreateClassifierRequest:
    csv_classifier: Optional[createcsvclassifierrequest.CreateCsvClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvClassifier' }})
    grok_classifier: Optional[creategrokclassifierrequest.CreateGrokClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrokClassifier' }})
    json_classifier: Optional[createjsonclassifierrequest.CreateJSONClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JsonClassifier' }})
    xml_classifier: Optional[createxmlclassifierrequest.CreateXMLClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XMLClassifier' }})
    
