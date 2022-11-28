from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcSecurityGroupMembership:
    r"""VpcSecurityGroupMembership
    Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.
    """
    
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    vpc_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSecurityGroupId') }})
    
