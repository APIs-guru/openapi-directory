from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import url


@dataclass_json
@dataclass
class GetAssessmentReportURLResponse:
    pre_signed_url: Optional[url.URL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preSignedUrl' }})
    
