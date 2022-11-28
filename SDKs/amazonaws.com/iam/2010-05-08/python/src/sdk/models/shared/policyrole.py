from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PolicyRole:
    r"""PolicyRole
    <p>Contains information about a role that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html\">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
    """
    
    role_id: Optional[str] = field(default=None)
    role_name: Optional[str] = field(default=None)
    
