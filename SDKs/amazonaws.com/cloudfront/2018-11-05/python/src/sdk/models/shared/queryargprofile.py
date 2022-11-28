from dataclasses import dataclass, field



@dataclass
class QueryArgProfile:
    r"""QueryArgProfile
    Query argument-profile mapping for field-level encryption.
    """
    
    profile_id: str = field()
    query_arg: str = field()
    
