from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PackageTypetoBundlesDeleteQueryParams:
    bundle_id: str = field(metadata={'query_param': { 'field_name': 'BundleID', 'style': 'form', 'explode': True }})
    package_type_id: str = field(metadata={'query_param': { 'field_name': 'PackageTypeID', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageTypetoBundlesDeleteRequest:
    query_params: PackageTypetoBundlesDeleteQueryParams = field()
    

@dataclass
class PackageTypetoBundlesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
