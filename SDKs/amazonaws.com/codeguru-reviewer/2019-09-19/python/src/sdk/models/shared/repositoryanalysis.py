from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RepositoryAnalysis:
    r"""RepositoryAnalysis
     A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href=\"https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview\"> <code>CreateCodeReview</code> </a>. 
    """
    
    repository_head: Optional[RepositoryHeadSourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryHead') }})
    source_code_type: Optional[SourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceCodeType') }})
    
