from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeCommitRepository:
    r"""CodeCommitRepository
    Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
