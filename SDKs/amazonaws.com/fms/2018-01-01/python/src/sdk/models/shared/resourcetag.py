from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceTag:
    r"""ResourceTag
    The resource tags that Firewall Manager uses to determine if a particular resource should be included or excluded from the Firewall Manager policy. Tags enable you to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with \"AND\" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see <a href=\"https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html\">Working with Tag Editor</a>.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
