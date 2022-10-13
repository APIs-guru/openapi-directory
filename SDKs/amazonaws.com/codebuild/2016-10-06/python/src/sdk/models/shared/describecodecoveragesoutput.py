from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import codecoverage


@dataclass_json
@dataclass
class DescribeCodeCoveragesOutput:
    code_coverages: Optional[List[codecoverage.CodeCoverage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeCoverages' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
