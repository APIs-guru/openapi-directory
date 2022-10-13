from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import updatecsvclassifierrequest
from . import updategrokclassifierrequest
from . import updatejsonclassifierrequest
from . import updatexmlclassifierrequest


@dataclass_json
@dataclass
class UpdateClassifierRequest:
    csv_classifier: Optional[updatecsvclassifierrequest.UpdateCsvClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvClassifier' }})
    grok_classifier: Optional[updategrokclassifierrequest.UpdateGrokClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrokClassifier' }})
    json_classifier: Optional[updatejsonclassifierrequest.UpdateJSONClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JsonClassifier' }})
    xml_classifier: Optional[updatexmlclassifierrequest.UpdateXMLClassifierRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XMLClassifier' }})
    
