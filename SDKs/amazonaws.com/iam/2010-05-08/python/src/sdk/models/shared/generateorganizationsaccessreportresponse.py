from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GenerateOrganizationsAccessReportResponse:
    job_id: Optional[str] = field(default=None)
    
