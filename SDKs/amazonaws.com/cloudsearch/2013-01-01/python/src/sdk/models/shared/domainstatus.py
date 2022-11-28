from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DomainStatus:
    r"""DomainStatus
    The current status of the search domain.
    """
    
    domain_id: str = field()
    domain_name: str = field()
    requires_index_documents: bool = field()
    arn: Optional[str] = field(default=None)
    created: Optional[bool] = field(default=None)
    deleted: Optional[bool] = field(default=None)
    doc_service: Optional[ServiceEndpoint] = field(default=None)
    limits: Optional[Limits] = field(default=None)
    processing: Optional[bool] = field(default=None)
    search_instance_count: Optional[int] = field(default=None)
    search_instance_type: Optional[str] = field(default=None)
    search_partition_count: Optional[int] = field(default=None)
    search_service: Optional[ServiceEndpoint] = field(default=None)
    
