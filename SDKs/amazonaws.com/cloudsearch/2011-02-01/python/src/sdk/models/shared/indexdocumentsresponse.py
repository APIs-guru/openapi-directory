from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class IndexDocumentsResponse:
    r"""IndexDocumentsResponse
    The result of an <code>IndexDocuments</code> action.
    """
    
    field_names: Optional[List[str]] = field(default=None)
    
