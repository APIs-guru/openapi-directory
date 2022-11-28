from dataclasses import dataclass, field



@dataclass
class GetUserPolicyResponse:
    r"""GetUserPolicyResponse
    Contains the response to a successful <a>GetUserPolicy</a> request. 
    """
    
    policy_document: str = field()
    policy_name: str = field()
    user_name: str = field()
    
