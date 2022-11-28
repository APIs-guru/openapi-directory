from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html\">TagCertificateAuthority</a> action. To remove a tag, call the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html\">UntagCertificateAuthority</a> action. 
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
