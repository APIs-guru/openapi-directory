from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import catalogimportstatus


@dataclass_json
@dataclass
class GetCatalogImportStatusResponse:
    import_status: Optional[catalogimportstatus.CatalogImportStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportStatus' }})
    
