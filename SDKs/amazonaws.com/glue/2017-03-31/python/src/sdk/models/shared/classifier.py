from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import csvclassifier
from . import grokclassifier
from . import jsonclassifier
from . import xmlclassifier


@dataclass_json
@dataclass
class Classifier:
    csv_classifier: Optional[csvclassifier.CsvClassifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvClassifier' }})
    grok_classifier: Optional[grokclassifier.GrokClassifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrokClassifier' }})
    json_classifier: Optional[jsonclassifier.JSONClassifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JsonClassifier' }})
    xml_classifier: Optional[xmlclassifier.XMLClassifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XMLClassifier' }})
    
