from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KmsGrantConstraints:
    r"""KmsGrantConstraints
    Use this structure to propose allowing <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations\">cryptographic operations</a> in the grant only when the operation request includes the specified <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context\">encryption context</a>. You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html\">GrantConstraints</a>.
    """
    
    encryption_context_equals: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionContextEquals') }})
    encryption_context_subset: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionContextSubset') }})
    
