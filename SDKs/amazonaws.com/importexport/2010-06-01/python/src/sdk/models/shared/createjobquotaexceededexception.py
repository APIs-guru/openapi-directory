from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateJobQuotaExceededException:
    r"""CreateJobQuotaExceededException
    Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case.
    """
    
    message: Optional[str] = field(default=None)
    
