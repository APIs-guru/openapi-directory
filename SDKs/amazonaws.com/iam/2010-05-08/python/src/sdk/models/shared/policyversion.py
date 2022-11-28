from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PolicyVersion:
    r"""PolicyVersion
    <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html\">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
    """
    
    create_date: Optional[datetime] = field(default=None)
    document: Optional[str] = field(default=None)
    is_default_version: Optional[bool] = field(default=None)
    version_id: Optional[str] = field(default=None)
    
