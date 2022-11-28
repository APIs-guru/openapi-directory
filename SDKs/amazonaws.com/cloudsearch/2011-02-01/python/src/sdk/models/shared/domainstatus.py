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
    created: Optional[bool] = field(default=None)
    deleted: Optional[bool] = field(default=None)
    doc_service: Optional[ServiceEndpoint] = field(default=None)
    num_searchable_docs: Optional[int] = field(default=None)
    processing: Optional[bool] = field(default=None)
    search_instance_count: Optional[int] = field(default=None)
    search_instance_type: Optional[str] = field(default=None)
    search_partition_count: Optional[int] = field(default=None)
    search_service: Optional[ServiceEndpoint] = field(default=None)
    
