from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentframeworkmetadata


@dataclass_json
@dataclass
class ListAssessmentFrameworksResponse:
    framework_metadata_list: Optional[List[assessmentframeworkmetadata.AssessmentFrameworkMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameworkMetadataList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
