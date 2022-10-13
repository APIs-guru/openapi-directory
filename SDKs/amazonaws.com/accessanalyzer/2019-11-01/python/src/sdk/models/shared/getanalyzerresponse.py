from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import analyzersummary


@dataclass_json
@dataclass
class GetAnalyzerResponse:
    analyzer: analyzersummary.AnalyzerSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzer' }})
    
