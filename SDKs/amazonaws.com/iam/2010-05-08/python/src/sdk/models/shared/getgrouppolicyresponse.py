from dataclasses import dataclass, field



@dataclass
class GetGroupPolicyResponse:
    r"""GetGroupPolicyResponse
    Contains the response to a successful <a>GetGroupPolicy</a> request. 
    """
    
    group_name: str = field()
    policy_document: str = field()
    policy_name: str = field()
    
