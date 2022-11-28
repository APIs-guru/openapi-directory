from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UnsuccessfulItemError:
    r"""UnsuccessfulItemError
    Information about the error that occurred. For more information about errors, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html\">Error codes</a>.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
