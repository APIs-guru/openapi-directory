from dataclasses import dataclass, field



@dataclass
class ErrorDetails:
    r"""ErrorDetails
    <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
    """
    
    code: str = field()
    message: str = field()
    
