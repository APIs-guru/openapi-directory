from dataclasses import dataclass, field



@dataclass
class GetRolePolicyResponse:
    r"""GetRolePolicyResponse
    Contains the response to a successful <a>GetRolePolicy</a> request. 
    """
    
    policy_document: str = field()
    policy_name: str = field()
    role_name: str = field()
    
