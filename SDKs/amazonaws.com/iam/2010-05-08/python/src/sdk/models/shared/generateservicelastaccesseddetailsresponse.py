from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GenerateServiceLastAccessedDetailsResponse:
    job_id: Optional[str] = field(default=None)
    
