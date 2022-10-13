from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TermsAggregation:
    max_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBuckets' }})
    
