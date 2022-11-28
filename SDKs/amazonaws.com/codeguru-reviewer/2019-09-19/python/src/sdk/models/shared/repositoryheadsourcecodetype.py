from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepositoryHeadSourceCodeType:
    r"""RepositoryHeadSourceCodeType
     A <a href=\"https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType\"> <code>SourceCodeType</code> </a> that specifies the tip of a branch in an associated repository. 
    """
    
    branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchName') }})
    
