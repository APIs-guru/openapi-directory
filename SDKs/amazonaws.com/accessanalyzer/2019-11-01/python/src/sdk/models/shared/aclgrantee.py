from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ACLGrantee:
    r"""ACLGrantee
    You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html\">PutBucketAcl</a>.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
