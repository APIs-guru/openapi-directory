from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAnalyzersResponse:
    r"""ListAnalyzersResponse
    The response to the request.
    """
    
    analyzers: List[AnalyzerSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzers') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
