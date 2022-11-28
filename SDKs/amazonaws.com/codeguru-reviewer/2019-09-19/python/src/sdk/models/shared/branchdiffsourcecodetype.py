from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BranchDiffSourceCodeType:
    r"""BranchDiffSourceCodeType
     A type of <a href=\"https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType\"> <code>SourceCodeType</code> </a> that specifies a code diff between a source and destination branch in an associated repository. 
    """
    
    destination_branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationBranchName') }})
    source_branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBranchName') }})
    
