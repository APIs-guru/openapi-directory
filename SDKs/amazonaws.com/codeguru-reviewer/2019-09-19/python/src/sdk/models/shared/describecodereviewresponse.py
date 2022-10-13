from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codereview


@dataclass_json
@dataclass
class DescribeCodeReviewResponse:
    code_review: Optional[codereview.CodeReview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeReview' }})
    
