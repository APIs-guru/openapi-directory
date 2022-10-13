from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetcontentversionvalue
from . import outputfileurivalue


@dataclass_json
@dataclass
class Variable:
    dataset_content_version_value: Optional[datasetcontentversionvalue.DatasetContentVersionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetContentVersionValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_file_uri_value: Optional[outputfileurivalue.OutputFileURIValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputFileUriValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
