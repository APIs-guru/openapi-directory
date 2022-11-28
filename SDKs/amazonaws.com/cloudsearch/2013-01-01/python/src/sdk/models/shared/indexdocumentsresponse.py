from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class IndexDocumentsResponse:
    r"""IndexDocumentsResponse
    The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.
    """
    
    field_names: Optional[List[str]] = field(default=None)
    
