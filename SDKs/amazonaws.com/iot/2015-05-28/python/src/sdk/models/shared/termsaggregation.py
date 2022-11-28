from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TermsAggregation:
    r"""TermsAggregation
    Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.
    """
    
    max_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBuckets') }})
    
